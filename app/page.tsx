"use client";
import React, { useState } from "react";
import LoginOverlay from "@/components/LoginOverlay";
import { useRouter } from "next/navigation";
import { AnimatePresence } from "framer-motion";

export default function LandingPage() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const router = useRouter();

  const handleLoginSuccess = (path: string) => {
    setIsLoginOpen(false);
    router.push(path);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-white font-inter">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/Assets/Loginpage.png" 
          alt="Background" 
          className="w-full h-full object-cover object-top"
        />
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent top-1/2" />
      </div>

      {/* Main Content Container - Pinned to bottom */}
      <div className="absolute bottom-0 left-0 w-full px-8 pb-10 z-10 flex flex-col justify-end h-full pointer-events-none">
        <div className="pointer-events-auto w-full">
            {/* Logo Section */}
            <div className="flex items-start gap-3 mb-6">
                <img src="/Assets/logo-login.png" alt="Logo" className="w-[50px] h-auto object-contain" />
                <div className="flex flex-col leading-none pt-1">
                    <span className="text-[#003D79] text-xl font-medium tracking-tight">perfect</span>
                    <span className="text-[#F3AB00] text-xl font-bold tracking-tight">assistant</span>
                    <div className="flex items-center gap-1 mt-1">
                        <span className="text-[#003D79] text-[10px]">by</span>
                        <img src="/Assets/Logo%20AMFS.png" alt="Mandiri" className="h-[12px] w-auto opacity-80" /> 
                    </div>
                </div>
            </div>
            
            {/* Header Text */}
            <h1 className="text-[#00008F] text-[34px] font-bold leading-[1.1] mb-8 tracking-tight">
                Now Tracking Your <br />
                Schedule <span className="text-[#F3AB00]">Easier</span>
            </h1>

            {/* Login Button */}
            <button
            onClick={() => setIsLoginOpen(true)}
            className="w-full h-[54px] bg-black text-white rounded-full flex items-center justify-center font-bold text-[18px] shadow-xl active:scale-95 transition-transform mb-6 working-button"
            >
            Login Now
            </button>

            {/* Version Info */}
            <div className="text-center w-full">
                <span className="text-gray-500 text-[12px] font-medium tracking-wide">updates 11 Februari 2026</span>
            </div>
        </div>
      </div>

      <AnimatePresence>
        {isLoginOpen && (
          <LoginOverlay onClose={() => setIsLoginOpen(false)} onSuccess={handleLoginSuccess} />
        )}
      </AnimatePresence>
    </div>
  );
}
