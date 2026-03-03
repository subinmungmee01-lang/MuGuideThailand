// lib/getCurrentLotteryRound.ts

export function getCurrentLotteryRound() {
  const now = new Date();

  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();

  const roundDay = day >= 16 ? 16 : 1;

  const roundKey = `${year}-${month}-${roundDay}`;

  return {
    year,
    month,
    roundDay,
    roundKey,
  };
}