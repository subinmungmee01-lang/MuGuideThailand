// data/lotteryHistory.ts

export interface LotteryDraw {
  date: string;
  threeFront: string;
  threeBack: string;
}

export const lotteryHistory: LotteryDraw[] = [
  { date: "1 มี.พ. 2569", threeFront: "866", threeBack: "06" },
  { date: "16 ก.พ. 2569", threeFront: "563", threeBack: "07" },
  { date: "1 ก.พ. 2569", threeFront: "629", threeBack: "48" },
  { date: "17 ม.ค. 2569", threeFront: "972", threeBack: "02" },
  { date: "2 ม.ค. 2569", threeFront: "706", threeBack: "16" },
  { date: "16 ธ.ค. 2568", threeFront: "895", threeBack: "52" },
  { date: "1 ธ.ค. 2568", threeFront: "252", threeBack: "22" },
  { date: "16 พ.ย. 2568", threeFront: "145", threeBack: "37" },
  { date: "1 พ.ย. 2568", threeFront: "898", threeBack: "87" },
  { date: "16 ต.ค. 2568", threeFront: "696", threeBack: "61" },
  { date: "1 ต.ค. 2568", threeFront: "978", threeBack: "77" },
];