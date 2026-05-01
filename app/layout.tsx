import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CookieConsent from "@/components/CookieConsent";

const prompt = Prompt({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const currentDate = new Date().toLocaleDateString("th-TH", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.muguide-thailand.com"),

  title: {
    default:
      "เลขธูปวันนี้ (อัปเดตล่าสุด) ไหว้พระ เสริมดวง ขอหวย เลขธูป รวมวัดดัง ขอพรการเงิน ความรัก โชคลาภ | MU GUIDE THAILAND",
    template: "%s | MU GUIDE THAILAND",
  },

  description: `รวมเลขธูปวันนี้ อัปเดตล่าสุด ${currentDate} พร้อมวิธีเสริมดวง การเงิน ความรัก สีมงคล และวัดดังทั่วไทย ครบจบในที่เดียว`,

  keywords: [
    "เลขธูปวันนี้",
    "เลขธูปวันนี้ ล่าสุด",
    "เลขธูปวันนี้ 2569",
    "เสริมดวง",
    "วิธีเสริมดวง",
    "เสริมดวงการเงิน",
    "เสริมดวงความรัก",
    "เสริมดวงโชคลาภ",
    "สีมงคลวันนี้",
    "สีมงคลประจำวัน",
    "วัดขอพร",
    "วัดศักดิ์สิทธิ์",
    "วัดขอหวย",
    "วัดดังทั่วไทย",
    "ไหว้พระ",
    "ขอพรที่ไหนดี",
    "ที่ไหว้พระใกล้ฉัน",
    "วัดดังอยุธยา",
    "วัดดังกรุงเทพ",
    "วัดดังนครปฐม",
    "สายมู",
    "เคล็ดลับสายมู",
    "วิธีเสริมดวงเห็นผลเร็ว",
  ],

  openGraph: {
    title:
      "ไหว้พระ เสริมดวง ขอหวย | เลขธูป รวมวัดดัง ขอพรการเงิน ความรัก โชคลาภ",
    description:
      "อัปเดตเลขธูปวันนี้ พร้อมสีมงคล วิธีเสริมดวง และวัดดังทั่วไทย ครบจบในเว็บเดียว",
    url: "https://www.muguide-thailand.com",
    siteName: "MU GUIDE THAILAND",
    locale: "th_TH",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "เลขธูปวันนี้ อัปเดตล่าสุด | MU GUIDE THAILAND",
    description:
      "ดูเลขธูปวันนี้ เสริมดวง สีมงคล และวัดดังทั่วไทย อัปเดตทุกวัน",
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
        className={`${prompt.className} antialiased bg-[#f6f2ea] text-gray-800 leading-relaxed`}
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

        {/* ✅ Cookie Consent */}
        <CookieConsent />
      </body>
    </html>
  );
}