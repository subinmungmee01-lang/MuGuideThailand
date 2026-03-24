import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const prompt = Prompt({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.muguide-thailand.com"),

  title: {
    default: "MU GUIDE THAILAND | เลขธูปวันนี้ สีมงคล วัดดังทั่วไทย",
    template: "%s | MU GUIDE THAILAND",
  },

  description:
    "รวมเลขธูปวันนี้ สีมงคลประจำวัน วัดดังทั่วไทย พร้อมเคล็ดลับเสริมดวงการเงิน การงาน และความรัก อัปเดตทุกวัน",

  keywords: [
    // สายมูหลัก
    "เลขธูปวันนี้",
    "สีมงคลวันนี้",
    "สีมงคลประจำวัน",
    "เสริมดวง",
    "สายมู",
    "ขอพรที่ไหนดี",

    // สถานที่ไหว้พระ
    "สถานที่ไหว้พระ",
    "สถานที่ไหว้พระในประเทศไทย",
    "ที่ไหว้พระใกล้ฉัน",
    "วัดดังทั่วไทย",
    "วัดขอพร",
    "วัดศักดิ์สิทธิ์",
    "พระธาตุศักดิ์สิทธิ์",

    // ท่องเที่ยวสายบุญ
    "เที่ยวไหว้พระ",
    "ไหว้พระ 1 วัน",
    "ทริปไหว้พระ",
    "ไหว้พระใกล้กรุงเทพ",
    "เที่ยววัดดัง",
    "สายบุญเที่ยวไหนดี",

    // ขอพรเฉพาะด้าน
    "วัดขอพรเรื่องงาน",
    "วัดขอพรโชคลาภ",
    "วัดขอพรความรัก",
    "วัดแก้ชง",

    // Local SEO
    "วัดดังอยุธยา",
    "วัดดังกรุงเทพ",
    "วัดดังนครปฐม",
    "สถานที่ไหว้พระอยุธยา"
  ],

  openGraph: {
    title: "MU GUIDE THAILAND",
    description:
      "ดูเลขธูปวันนี้ สีมงคล และวัดดังทั่วไทย อัปเดตทุกวัน",
    url: "https://www.muguide-thailand.com",
    siteName: "MU GUIDE THAILAND",
    locale: "th_TH",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "MU GUIDE THAILAND",
    description: "เลขธูปวันนี้ สีมงคล และวัดดังทั่วไทย",
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
        <meta
          name="google-site-verification"
          content="zlAj3pAzTH14IvFGVPKRdgrRIt70Mysuxaj5arg0WzM"
        />
        <meta
          name="google-adsense-account"
          content="ca-pub-4539487034330957"
        />
        <meta name="agd-partner-manual-verification" />

        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4539487034330957"
          crossOrigin="anonymous"
        ></script>

        {/* Google Analytics (GA4) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-4024X66DN6"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-4024X66DN6');
      `,
          }}
        />


      </head>

      <body
        className={`${prompt.className} antialiased bg-[#f6f2ea] text-gray-800 leading-relaxed`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}