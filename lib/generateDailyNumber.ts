// lib/generateDailyNumber.ts

export function generateDailyIncenseNumber(date: Date) {
  // เอาวันที่มาเป็น seed
  const seed = Number(
    date.getFullYear().toString() +
    (date.getMonth() + 1).toString().padStart(2, "0") +
    date.getDate().toString().padStart(2, "0")
  );

  // สร้าง pseudo-random จาก seed
  const random = (seed * 9301 + 49297) % 233280;

  const numbers = [];

  for (let i = 0; i < 3; i++) {
    const num = (random + i * 7) % 10;
    numbers.push(num);
  }

  return numbers.join(" ");
}