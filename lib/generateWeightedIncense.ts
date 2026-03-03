// lib/generateWeightedIncense.ts

import { lotteryHistory } from "@/data/lotteryHistory";

export function generateWeightedIncense() {
  if (!lotteryHistory || lotteryHistory.length === 0) {
    return {
      incense: "0 0 0",
      latestDate: "ไม่มีข้อมูล",
    };
  }

  const latestDraws = lotteryHistory.slice(0, 10); // ใช้ 10 งวดล่าสุด

  const frequency: Record<string, number> = {};

  latestDraws.forEach((draw, index) => {
    const weight = 10 - index; // งวดใหม่สุดน้ำหนักมากสุด

    const digits = (draw.threeFront + draw.threeBack).split("");

    digits.forEach((digit) => {
      frequency[digit] = (frequency[digit] || 0) + weight;
    });
  });

  const sortedDigits = Object.entries(frequency)
    .sort((a, b) => b[1] - a[1])
    .map(([digit]) => digit);

  const incenseDigits = sortedDigits.slice(0, 3);

  return {
    incense: incenseDigits.join(" "),
    latestDate: lotteryHistory[0].date,
  };
}