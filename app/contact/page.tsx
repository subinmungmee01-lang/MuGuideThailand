export const metadata = {
  title: "ติดต่อเรา | MU GUIDE THAILAND",
  description: "ช่องทางติดต่อ MU GUIDE THAILAND สำหรับแจ้งข้อมูล แนะนำสถานที่ หรือสอบถามเกี่ยวกับเว็บไซต์",
};

export default function ContactPage() {
  return (
    <main className="bg-white">
      <section className="max-w-3xl mx-auto px-6 py-20">
        <p className="text-xs tracking-[0.35em] text-amber-700 mb-4">CONTACT</p>
        <h1 className="text-4xl font-semibold text-burgundy mb-6">ติดต่อเรา</h1>

        <div className="space-y-5 text-gray-700 leading-relaxed">
          <p>
            หากต้องการแจ้งข้อมูลสถานที่ แนะนำวัดเพิ่มเติม แก้ไขข้อมูลที่คลาดเคลื่อน
            หรือสอบถามเกี่ยวกับเว็บไซต์ MU GUIDE THAILAND สามารถติดต่อเราได้ทางอีเมลด้านล่าง
          </p>

          <div className="rounded-2xl border border-amber-100 bg-[#fffaf2] p-6">
            <p className="font-semibold text-burgundy">อีเมลติดต่อ</p>
            <a href="mailto:contact@muguide-thailand.com" className="text-blue-600 underline">
              contact@muguide-thailand.com
            </a>
          </div>

          <p className="text-sm text-gray-500">
            หมายเหตุ: เว็บไซต์นี้เป็นเว็บไซต์ข้อมูลท่องเที่ยวและวัฒนธรรม ไม่ใช่ตัวแทนของวัดหรือหน่วยงานราชการ
            กรุณาตรวจสอบข้อมูลสำคัญกับสถานที่จริงก่อนเดินทางทุกครั้ง
          </p>
        </div>
      </section>
    </main>
  );
}
