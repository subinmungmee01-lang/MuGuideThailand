export function getThaiDate() {
  return new Date(
    new Date().toLocaleString("en-US", {
      timeZone: "Asia/Bangkok",
    })
  );
}