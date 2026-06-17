// lib/generateStatIncense.ts

import { lotteryHistory } from "@/data/lotteryHistory";

const DRAW_LIMIT = 20;

// ยิ่งเลขสูง งวดล่าสุดยิ่งมีผลมาก
// ถ้าอยากให้สถิติเปลี่ยนไวขึ้น เพิ่มเป็น 15 หรือ 20 ได้
const LATEST_BONUS = 10;

function normalizeDigits(value: string | number | undefined | null, length: number) {
  return String(value ?? "")
    .replace(/\D/g, "")
    .padStart(length, "0")
    .slice(-length);
}

function addScore(
  scores: number[][],
  position: number,
  digitText: string,
  weight: number
) {
  const digit = Number(digitText);

  if (Number.isInteger(digit) && digit >= 0 && digit <= 9) {
    scores[position][digit] += weight;
  }
}

function pickBestDigit(scores: number[], avoidZero = false) {
  const maxScore = Math.max(...scores);

  const candidates = scores
    .map((score, digit) => ({ score, digit }))
    .filter((item) => item.score === maxScore)
    .map((item) => item.digit);

  // หลักแรก ถ้าคะแนนเสมอกัน จะเลี่ยงเลข 0 ก่อน
  if (avoidZero && candidates.length > 1) {
    const nonZero = candidates.find((digit) => digit !== 0);
    if (nonZero !== undefined) return nonZero;
  }

  // ถ้าคะแนนเสมอกัน เลือกเลขมากกว่า เพื่อให้ผลไม่ล็อกเลขต่ำตลอด
  return candidates[candidates.length - 1] ?? 0;
}

export function generateStatIncense() {
  if (!lotteryHistory || lotteryHistory.length === 0) {
    return {
      incense: "0 0 0",
      latestDate: "ไม่มีข้อมูล",
    };
  }

  // ใช้ 20 งวดล่าสุด โดยถือว่างวดล่าสุดอยู่บนสุด
  const latestDraws = lotteryHistory.slice(0, DRAW_LIMIT);

  // scores[0] = หลักร้อย
  // scores[1] = หลักสิบ
  // scores[2] = หลักหน่วย
  const positionScores: number[][] = [
    Array(10).fill(0),
    Array(10).fill(0),
    Array(10).fill(0),
  ];

  latestDraws.forEach((draw, index) => {
    // งวดบนสุดน้ำหนักมากสุด
    let weight = DRAW_LIMIT - index;

    // เพิ่มน้ำหนักพิเศษให้งวดล่าสุด
    if (index === 0) {
      weight += LATEST_BONUS;
    }

    const front = normalizeDigits(draw.threeFront, 3);
    const back = normalizeDigits(draw.threeBack, 2);

    // เลขหน้า 3 ตัว ใช้ครบ 3 หลัก
    addScore(positionScores, 0, front[0], weight);
    addScore(positionScores, 1, front[1], weight);
    addScore(positionScores, 2, front[2], weight);

    // เลขท้าย 2 ตัว เอาไปช่วยคำนวณหลักสิบและหลักหน่วย
    addScore(positionScores, 1, back[0], weight);
    addScore(positionScores, 2, back[1], weight);
  });

  const d1 = pickBestDigit(positionScores[0], true);
  const d2 = pickBestDigit(positionScores[1]);
  const d3 = pickBestDigit(positionScores[2]);

  return {
    incense: `${d1} ${d2} ${d3}`,
    latestDate: lotteryHistory[0].date,
  };
}