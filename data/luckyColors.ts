// data/luckyColors.ts

export type DayKey = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export interface LuckyDayData {
  dayNameTH: string;
  colors: string[];
}

export const luckyData: Record<DayKey, LuckyDayData> = {
  0: {
    dayNameTH: "วันอาทิตย์",
    colors: ["#FF69B4", "#085eff", "#141414"],
  },
  1: {
    dayNameTH: "วันจันทร์",
    colors: ["#00a000", "#085eff", "#ff0303"],
  },
  2: {
    dayNameTH: "วันอังคาร",
    colors: ["#a338eb", "#ff6600", "#ff0303"],
  },
  3: {
    dayNameTH: "วันพุธ",
    colors: ["#ff3c00", "#FF69B4", "#fff7db"],
  },
  4: {
    dayNameTH: "วันพฤหัสบดี",
    colors: ["#f10f0f", "#00a000", "#a338eb"],
  },
  5: {
    dayNameTH: "วันศุกร์",
    colors: ["#ffee01", "#ff3c00", "#FF69B4"],
  },
  6: {
    dayNameTH: "วันเสาร์",
    colors: ["#ff4dd3", "#00a000", "#0e0e0e"],
  },
};