// lib/generateStatIncense.ts

import { lotteryHistory } from "@/data/lotteryHistory";

function normalizeThreeDigit(value: string | number | undefined | null) {
  return String(value ?? "")
    .replace(/\D/g, "")
    .padStart(3, "0")
    .slice(-3);
}

function pickBestDigit(scores: number[]) {
  let bestDigit = 0;
  let bestScore = -1;

  scores.forEach((score, digit) => {
    if (score > bestScore) {
      bestScore = score;
      bestDigit = digit;
    }
  });

  return bestDigit;
}

export function generateStatIncense() {
  if (!lotteryHistory || lotteryHistory.length === 0) {
    return {
      incense: "0 0 0",
      latestDate: "ไม่มีข้อมูล",
    };
  }

  // สำคัญ: ต้องให้ lotteryHistory เรียงจาก "งวดล่าสุด" อยู่บนสุด
  const latestDraws = lotteryHistory.slice(0, 20);

  // เก็บคะแนนแยกตามหลัก 3 หลัก
  // เช่น positionScores[0] = หลักร้อย, [1] = หลักสิบ, [2] = หลักหน่วย
  const positionScores: number[][] = [
    Array(10).fill(0),
    Array(10).fill(0),
    Array(10).fill(0),
  ];

  latestDraws.forEach((draw, index) => {
    // งวดล่าสุดน้ำหนักมากสุด
    const weight = latestDraws.length - index;

    const front = normalizeThreeDigit(draw.threeFront);
    const back = normalizeThreeDigit(draw.threeBack);

    const numbers = [front, back];

    numbers.forEach((num) => {
      num.split("").forEach((digitText, position) => {
        const digit = Number(digitText);

        if (!Number.isNaN(digit)) {
          positionScores[position][digit] += weight;
        }
      });
    });
  });

  const d1 = pickBestDigit(positionScores[0]);
  const d2 = pickBestDigit(positionScores[1]);
  const d3 = pickBestDigit(positionScores[2]);

  return {
    incense: `${d1} ${d2} ${d3}`,
    latestDate: lotteryHistory[0].date,
  };
}