"use client";

import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");

    if (!consent) {
      setShow(true);
    }

    // ✅ 🔥 สำคัญมาก: restore consent ทุกครั้งที่เข้าเว็บ
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        ad_storage: consent === "accepted" ? "granted" : "denied",
        analytics_storage: consent === "accepted" ? "granted" : "denied",
        ad_user_data: consent === "accepted" ? "granted" : "denied",
        ad_personalization: consent === "accepted" ? "granted" : "denied",
      });
    }
  }, []);

  const acceptConsent = () => {
    localStorage.setItem("cookie_consent", "accepted");

    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        ad_storage: "granted",
        analytics_storage: "granted",
        ad_user_data: "granted",
        ad_personalization: "granted",
      });
    }

    setShow(false);
  };

  const declineConsent = () => {
    localStorage.setItem("cookie_consent", "denied");

    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        ad_storage: "denied",
        analytics_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
      });
    }

    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg border-t z-50">
      <div className="max-w-5xl mx-auto p-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-700">
          เว็บไซต์นี้ใช้คุกกี้เพื่อพัฒนาประสบการณ์การใช้งาน และแสดงโฆษณาที่เหมาะสม
        </p>

        <div className="flex gap-2">
          <button
            onClick={declineConsent}
            className="px-4 py-2 text-sm border rounded-lg"
          >
            ปฏิเสธ
          </button>
          <button
            onClick={acceptConsent}
            className="px-4 py-2 text-sm bg-black text-white rounded-lg"
          >
            ยอมรับ
          </button>
        </div>
      </div>
    </div>
  );
}