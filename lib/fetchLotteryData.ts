export async function fetchLotteryHistory() {
  const res = await fetch(
    "https://raw.githubusercontent.com/USERNAME/REPO/main/lotteryHistory.json",
    { cache: "no-store" } // ดึงใหม่ทุกครั้ง
  );

  if (!res.ok) {
    throw new Error("Failed to fetch lottery data");
  }

  return res.json();
}