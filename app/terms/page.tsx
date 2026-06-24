export const metadata = {
  title: "เงื่อนไขการใช้งาน | MU GUIDE THAILAND",
  description: "เงื่อนไขการใช้งานเว็บไซต์ MU GUIDE THAILAND และข้อจำกัดความรับผิดชอบเกี่ยวกับข้อมูลบนเว็บไซต์",
};

export default function TermsPage() {
  return (
    <main className="bg-white">
      <section className="max-w-3xl mx-auto px-6 py-20">
        <p className="text-xs tracking-[0.35em] text-amber-700 mb-4">TERMS</p>
        <h1 className="text-4xl font-semibold text-burgundy mb-6">เงื่อนไขการใช้งาน</h1>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-burgundy mb-2">1. วัตถุประสงค์ของเว็บไซต์</h2>
            <p>
              MU GUIDE THAILAND จัดทำขึ้นเพื่อให้ข้อมูลด้านการท่องเที่ยววัด วัฒนธรรมไทย
              ประวัติสถานที่ และข้อแนะนำก่อนเดินทาง ข้อมูลทั้งหมดมีวัตถุประสงค์เพื่อการอ่านและวางแผนเบื้องต้นเท่านั้น
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-burgundy mb-2">2. ความถูกต้องของข้อมูล</h2>
            <p>
              เราพยายามตรวจสอบและปรับปรุงข้อมูลให้เหมาะสมอยู่เสมอ แต่อาจมีการเปลี่ยนแปลงเรื่องเวลาเปิด
              ค่าบริการ หรือข้อกำหนดของสถานที่โดยไม่แจ้งล่วงหน้า ผู้ใช้งานควรตรวจสอบข้อมูลกับสถานที่จริงก่อนเดินทาง
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-burgundy mb-2">3. ลิงก์ภายนอก</h2>
            <p>
              เว็บไซต์อาจมีลิงก์ไปยังเว็บไซต์ภายนอกเพื่ออำนวยความสะดวก เช่น แผนที่หรือบริการจองที่พัก
              เราไม่รับผิดชอบเนื้อหา นโยบาย หรือการให้บริการของเว็บไซต์ภายนอกเหล่านั้น
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-burgundy mb-2">4. ลิขสิทธิ์</h2>
            <p>
              ข้อความ รูปแบบการนำเสนอ และองค์ประกอบบนเว็บไซต์เป็นทรัพย์สินของผู้จัดทำ
              ห้ามคัดลอก ดัดแปลง หรือนำไปใช้เชิงพาณิชย์โดยไม่ได้รับอนุญาต เว้นแต่เป็นการอ้างอิงโดยสุจริตพร้อมระบุแหล่งที่มา
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
