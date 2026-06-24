import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CookieConsent from "@/components/CookieConsent";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.muguide-thailand.com"),

  title: {
    default:
      "คู่มือเที่ยววัด ไหว้พระ ทำบุญ และวัดดังทั่วไทย | MU GUIDE THAILAND",
    template: "%s | MU GUIDE THAILAND",
  },

  description:
    "MU GUIDE THAILAND คู่มือเที่ยววัด ไหว้พระ ทำบุญ และเรียนรู้วัฒนธรรมไทย รวมข้อมูลวัดดังทั่วประเทศ วิธีเดินทาง เวลาเปิด และข้อควรรู้ก่อนเดินทาง",

  keywords: [
    "ไหว้พระ",
    "เที่ยววัด",
    "วัดดังทั่วไทย",
    "ทำบุญ",
    "วัฒนธรรมไทย",
    "เส้นทางไหว้พระ",
    "วัดกรุงเทพ",
    "วัดกาญจนบุรี",
    "วัดแม่ฮ่องสอน",
    "วัดนครสวรรค์",
    "คู่มือเที่ยววัด",
    "มารยาทเข้าวัด",
  ],

  openGraph: {
    title: "คู่มือเที่ยววัด ไหว้พระ ทำบุญ และวัดดังทั่วไทย",
    description:
      "รวมข้อมูลวัดดังทั่วไทย ประวัติ วิธีเดินทาง เวลาเปิด และข้อควรรู้ก่อนเดินทาง",
    url: "https://www.muguide-thailand.com",
    siteName: "MU GUIDE THAILAND",
    locale: "th_TH",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "คู่มือเที่ยววัดทั่วไทย | MU GUIDE THAILAND",
    description:
      "ข้อมูลเที่ยววัด ไหว้พระ ทำบุญ และวัฒนธรรมไทยสำหรับวางแผนเดินทาง",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" className="text-[18px] md:text-[19px]">
      <head>
        {/* ✅ Mobile SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* ✅ Verification */}
        <meta
          name="google-site-verification"
          content="zlAj3pAzTH14IvFGVPKRdgrRIt70Mysuxaj5arg0WzM"
        />
        <meta
          name="google-adsense-account"
          content="ca-pub-4539487034330957"
        />
      </head>

      <body
        className="antialiased bg-[#f6f2ea] text-gray-800 leading-relaxed"
      >
        {/* ✅ Consent Mode (ต้องมาก่อนทุก script) */}
        <Script id="consent" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              ad_storage: 'denied',
              analytics_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              wait_for_update: 500
            });
          `}
        </Script>

        {/* ✅ Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4024X66DN6"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4024X66DN6', {
              anonymize_ip: true
            });
          `}
        </Script>

        {/* ✅ Google AdSense */}
        <Script
          async
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4539487034330957"
          crossOrigin="anonymous"
        />

        <Navbar />
        {children}
        <Footer />

        {/* ✅ Cookie Consent */}
        <CookieConsent />
      </body>
    </html>
  );
}