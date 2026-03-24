export default function PrivacyPolicy() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold mb-6">นโยบายความเป็นส่วนตัว</h1>

      <p className="mb-4">
        เว็บไซต์ MU GUIDE THAILAND ให้ความสำคัญกับความเป็นส่วนตัวของผู้ใช้งาน
        นโยบายนี้อธิบายถึงการเก็บรวบรวม ใช้งาน และปกป้องข้อมูลของคุณ
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">1. ข้อมูลที่เราเก็บ</h2>
      <p className="mb-4">
        เราอาจเก็บข้อมูล เช่น ที่อยู่ IP ประเภทอุปกรณ์ เบราว์เซอร์
        และพฤติกรรมการใช้งานผ่านเครื่องมือวิเคราะห์ เช่น Google Analytics
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">2. การใช้คุกกี้</h2>
      <p className="mb-4">
        เว็บไซต์นี้ใช้คุกกี้เพื่อปรับปรุงประสบการณ์การใช้งาน
        รวมถึงคุกกี้จากบุคคลที่สาม เช่น Google AdSense เพื่อแสดงโฆษณาที่เหมาะสมกับผู้ใช้งาน
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">3. การใช้ Google AdSense</h2>
      <p className="mb-4">
        เราใช้ Google AdSense ในการแสดงโฆษณา ซึ่งอาจใช้คุกกี้ DoubleClick
        เพื่อแสดงโฆษณาตามความสนใจของผู้ใช้
        คุณสามารถปิดการใช้งานได้ที่
        <a
          href="https://adssettings.google.com"
          target="_blank"
          className="text-blue-600 underline ml-1"
        >
          Ads Settings
        </a>
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">4. การใช้ Google Analytics</h2>
      <p className="mb-4">
        เราใช้ Google Analytics เพื่อวิเคราะห์พฤติกรรมผู้ใช้งาน
        ข้อมูลจะถูกประมวลผลในรูปแบบไม่ระบุตัวตน
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">5. ลิงก์ไปยังเว็บไซต์ภายนอก</h2>
      <p className="mb-4">
        เว็บไซต์อาจมีลิงก์ไปยังเว็บไซต์ภายนอก เช่น Agoda
        เราไม่รับผิดชอบนโยบายความเป็นส่วนตัวของเว็บไซต์เหล่านั้น
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">6. สิทธิของผู้ใช้งาน</h2>
      <p className="mb-4">
        คุณมีสิทธิ์ปฏิเสธการใช้คุกกี้ หรือขอลบข้อมูลส่วนบุคคลของคุณได้
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">7. การเปลี่ยนแปลงนโยบาย</h2>
      <p className="mb-4">
        เราอาจปรับปรุงนโยบายนี้เป็นครั้งคราว โดยจะแสดงเวอร์ชันล่าสุดบนหน้านี้
      </p>

      <p className="mt-10 text-sm text-gray-500">
        อัปเดตล่าสุด: {new Date().toLocaleDateString("th-TH")}
      </p>
    </main>
  );
}