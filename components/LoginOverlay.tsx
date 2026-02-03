"use client";
import React, { useState } from "react";
import { X, LogIn } from "lucide-react";
import { motion } from "framer-motion";

export default function LoginOverlay({ onClose, onSuccess }: { onClose: () => void; onSuccess: () => void }) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onSuccess();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm pointer-events-auto" onClick={onClose} />
      
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="pointer-events-auto relative w-full max-w-[340px] h-auto max-h-[85vh] bg-white rounded-[24px] shadow-2xl flex flex-col items-center py-[40px] px-[24px] overflow-y-auto"
      >
        <button 
          onClick={onClose}
          className="absolute top-[24px] right-[23px] w-[26px] h-[26px] flex items-center justify-center text-black"
        >
          <X className="w-6 h-6" strokeWidth={2.5} />
        </button>

        <div className="flex flex-col items-center gap-[23px] mb-[65px] w-full">
             <div className="w-[120px] h-auto relative">
                <img src="/Assets/Logo AMFS.png" alt="AMFS Logo" className="w-full h-auto object-contain" />
             </div>
             <div className="text-[24px] font-bold mt-2">AMFS</div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col w-full">
           <div className="h-[59px] rounded-[16px] bg-[#E9E9E9] mb-[24px] flex items-center px-6">
              <input 
                 className="bg-transparent w-full text-[14px] font-medium placeholder-[#323232] outline-none"
                 placeholder="Username/email*"
              />
           </div>

           <div className="h-[59px] rounded-[16px] bg-[#E9E9E9] mb-[24px] flex items-center px-6">
              <input 
                 type="password"
                 className="bg-transparent w-full text-[14px] font-medium placeholder-[#323232] outline-none"
                 placeholder="Password*"
              />
           </div>

           <div className="text-[#323232] text-[14px] font-medium mb-[43px]">
              Don't remember your password?
           </div>

           <button 
              type="submit"
              disabled={loading}
              className="h-[66px] w-full bg-[#00008F] text-white rounded-[16px] flex items-center justify-center gap-3 active:scale-95 transition-transform"
           >
              {loading ? (
                  <span className="text-[16px] font-bold">Loading...</span>
              ) : (
                  <>
                    <LogIn className="w-6 h-6" />
                    <span className="text-[16px] font-bold tracking-wide uppercase">LOG IN</span>
                  </>
              )}
           </button>
        </form>
      </motion.div>
    </div>
  );
}
