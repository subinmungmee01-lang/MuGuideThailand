// lib/generateStatIncense.ts

import { lotteryHistory } from "@/data/lotteryHistory";

export function generateStatIncense(roundKey?: string) {
  if (!lotteryHistory || lotteryHistory.length === 0) {
    return {
      incense: "0 0 0",
      latestDate: "ไม่มีข้อมูล",
    };
  }

  const latestDraws = lotteryHistory.slice(0, 20);

  let weightedSum = 0;
  let totalWeight = 0;

  latestDraws.forEach((draw, index) => {
    const weight = 20 - index; // งวดล่าสุดน้ำหนักมากสุด

    const front = draw.threeFront.padStart(3, "0");
    const back = draw.threeBack.padStart(3, "0");

    const digits = (front + back)
      .split("")
      .map(Number);

    const meanOfDraw =
      digits.reduce((sum, n) => sum + n, 0) / digits.length;

    weightedSum += meanOfDraw * weight;
    totalWeight += weight;
  });

  const finalMean = weightedSum / totalWeight;

  // แปลงเป็นเลข 3 ตัวแบบเสถียร
  const base = Math.floor(finalMean * 100);

  const d1 = base % 10;
  const d2 = Math.floor(base / 10) % 10;
  const d3 = Math.floor(base / 100) % 10;

  return {
    incense: `${d1} ${d2} ${d3}`,
    latestDate: lotteryHistory[0].date,
  };
}