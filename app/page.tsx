"use client";
import React, { useState } from "react";
import LoginOverlay from "@/components/LoginOverlay";
import { useRouter } from "next/navigation";
import { AnimatePresence } from "framer-motion";

export default function LandingPage() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const router = useRouter();

  const handleLoginSuccess = () => {
    setIsLoginOpen(false);
    router.push("/dashboard");
  };

  return (
    <div className="relative w-full h-full min-h-screen bg-white overflow-y-auto pb-[100px]">
      <div className="relative w-full h-[956px]">
        {/* Background Asset */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/Loginpage.png" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* "Login Now" Button - Fixed/Sticky at absolute bottom of viewport */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[440px] px-6 pb-8 pt-4 bg-gradient-to-t from-white/80 to-transparent z-40">
        <button
          onClick={() => setIsLoginOpen(true)}
          className="w-full h-[49px] bg-[#00008F] text-white rounded-[12px] flex items-center justify-center shadow-lg active:scale-95 transition-transform"
        >
          <span className="font-bold text-[24px] leading-normal font-inter">Login Now</span>
        </button>
      </div>

      <AnimatePresence>
        {isLoginOpen && (
          <LoginOverlay onClose={() => setIsLoginOpen(false)} onSuccess={handleLoginSuccess} />
        )}
      </AnimatePresence>
    </div>
  );
}
