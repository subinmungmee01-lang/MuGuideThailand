export const metadata = {
  title: "นโยบายความเป็นส่วนตัว | MU GUIDE THAILAND",
  description:
    "นโยบายความเป็นส่วนตัว การใช้คุกกี้ Google Analytics และ Google AdSense ของเว็บไซต์ MU GUIDE THAILAND",
};

export default function PrivacyPolicy() {
  return (
    <main className="bg-white">
      <section className="max-w-3xl mx-auto py-20 px-6">
        <p className="text-xs tracking-[0.35em] text-amber-700 mb-4">PRIVACY POLICY</p>
        <h1 className="text-4xl font-semibold text-burgundy mb-6">นโยบายความเป็นส่วนตัว</h1>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            เว็บไซต์ MU GUIDE THAILAND ให้ความสำคัญกับความเป็นส่วนตัวของผู้ใช้งาน
            นโยบายนี้อธิบายถึงการเก็บรวบรวม ใช้งาน และปกป้องข้อมูลเมื่อคุณเข้าใช้งานเว็บไซต์ของเรา
          </p>

          <section>
            <h2 className="text-xl font-semibold text-burgundy mb-2">1. ข้อมูลที่เราอาจเก็บรวบรวม</h2>
            <p>
              เราอาจเก็บข้อมูลทางเทคนิค เช่น ที่อยู่ IP ประเภทอุปกรณ์ เบราว์เซอร์ หน้าที่เข้าชม
              และพฤติกรรมการใช้งานโดยรวมผ่านเครื่องมือวิเคราะห์ เพื่อปรับปรุงคุณภาพของเว็บไซต์
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-burgundy mb-2">2. การใช้คุกกี้</h2>
            <p>
              เว็บไซต์นี้ใช้คุกกี้เพื่อจดจำการตั้งค่าบางอย่าง วิเคราะห์การใช้งาน และปรับปรุงประสบการณ์ของผู้ใช้งาน
              ผู้ใช้งานสามารถยอมรับหรือปฏิเสธคุกกี้ได้จากแถบแจ้งเตือนบนเว็บไซต์ หรือปรับการตั้งค่าผ่านเบราว์เซอร์ของตนเอง
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-burgundy mb-2">3. Google Analytics</h2>
            <p>
              เราใช้ Google Analytics เพื่อวิเคราะห์จำนวนผู้เข้าชมและพฤติกรรมการใช้งานในภาพรวม
              ข้อมูลที่ได้ช่วยให้เราปรับปรุงเนื้อหาและประสบการณ์การใช้งานให้ดีขึ้น
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-burgundy mb-2">4. Google AdSense และโฆษณา</h2>
            <p>
              เว็บไซต์นี้อาจใช้ Google AdSense เพื่อแสดงโฆษณา Google และผู้ให้บริการโฆษณาบุคคลที่สาม
              อาจใช้คุกกี้เพื่อแสดงโฆษณาที่เกี่ยวข้องกับการเข้าชมเว็บไซต์ของผู้ใช้งาน ผู้ใช้งานสามารถจัดการหรือปิดการปรับโฆษณาตามความสนใจได้ที่
              <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline mx-1">
                Google Ads Settings
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-burgundy mb-2">5. ลิงก์ไปยังเว็บไซต์ภายนอก</h2>
            <p>
              เว็บไซต์อาจมีลิงก์ไปยังเว็บไซต์ภายนอก เช่น Google Maps หรือบริการอื่น ๆ
              เราไม่สามารถควบคุมเนื้อหาและนโยบายความเป็นส่วนตัวของเว็บไซต์ภายนอกเหล่านั้นได้
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-burgundy mb-2">6. การติดต่อเรา</h2>
            <p>
              หากมีคำถามเกี่ยวกับนโยบายความเป็นส่วนตัว สามารถติดต่อได้ที่
              <a href="mailto:contact@muguide-thailand.com" className="text-blue-600 underline mx-1">
                contact@muguide-thailand.com
              </a>
            </p>
          </section>
        </div>

        <p className="mt-10 text-sm text-gray-500">
          อัปเดตล่าสุด: {new Date().toLocaleDateString("th-TH")}
        </p>
      </section>
    </main>
  );
}
