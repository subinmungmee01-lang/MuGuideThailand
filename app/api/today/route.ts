// app/api/today/route.ts

import { NextResponse } from "next/server";
import { luckyData } from "@/data/luckyColors";
import { getThaiDate } from "@/lib/getThaiDate";
import { generateStatIncense } from "@/lib/generateStatIncense";
import { getCurrentLotteryRound } from "@/lib/getCurrentLotteryRound";

export async function GET() {
  try {
    const thaiDate = getThaiDate();
    const day = thaiDate.getDay() as 0 | 1 | 2 | 3 | 4 | 5 | 6;

    const todayData = luckyData[day];

    const round = getCurrentLotteryRound();

    const { incense, latestDate } = generateStatIncense(round.roundKey);

    return NextResponse.json({
      success: true,
      strategy: "Statistical Weighted Model v1 (Per Lottery Round)",
      lotteryReference: latestDate,
      round: `${round.roundDay}/${round.month}/${round.year}`,
      dayNameTH: todayData.dayNameTH,
      colors: todayData.colors,
      incenseNumbers: incense,
      updatedAt: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "เกิดข้อผิดพลาดในการคำนวณเลขธูป",
      },
      { status: 500 }
    );
  }
}