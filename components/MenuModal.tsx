"use client";
import React from "react";
import { motion } from "framer-motion";

import { useRouter } from "next/navigation";

interface MenuModalProps {
  onClose: () => void;
}

const menuItems = [
  { label: "Kalender", icon: "/Assets/Icons/solar_calendar-bold-duotone.svg" },
  { label: "Komisi", icon: "/Assets/Icons/solar_wallet-bold-duotone.svg" },
  { label: "Lokasi", icon: "/Assets/Icons/solar_streets-map-point-bold-duotone.svg" },
  { label: "Lokasi User", icon: "/Assets/Icons/ic_twotone-person-pin-circle.svg" },
  { label: "Tele UW", icon: "/Assets/Icons/solar_notes-bold-duotone.svg" },
  { label: "After Sales", icon: "/Assets/Icons/after sales.svg" },
];

export default function MenuModal({ onClose }: MenuModalProps) {
  const router = useRouter();
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center">
      {/* Background Blur Overlay */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Gradient Container */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-[340px] aspect-square rounded-[32px] overflow-hidden p-8 flex flex-col items-center shadow-2xl"
        style={{ background: 'linear-gradient(135deg, #548AD8 0%, #8A4BD3 100%)' }}
      >
        {/* Abstract Circle/Lines Background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i} 
              className="absolute top-1/2 left-1/2 rounded-full border border-white -translate-x-1/2 -translate-y-1/2" 
              style={{ width: `${(i + 1) * 80}px`, height: `${(i + 1) * 80}px` }}
            />
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-3 gap-y-10 gap-x-4 w-full relative z-10">
          {menuItems.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center gap-2 cursor-pointer active:scale-95 transition-transform"
              onClick={() => {
                if (item.label === "After Sales") {
                  router.push("/dashboard/transaksi");
                  onClose();
                }
              }}
            >
              <div className="w-[50px] h-[50px] bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md">
                <img src={item.icon} alt={item.label} className="w-8 h-8 object-contain brightness-0 invert" />
              </div>
              <span className="text-white text-[12px] font-semibold text-center whitespace-nowrap">{item.label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Close Button (Rhombus/Diamond) */}
      <motion.button 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        onClick={onClose}
        className="mt-12 w-[64px] h-[64px] bg-white rounded-[20px] rotate-45 flex items-center justify-center shadow-xl active:scale-90 transition-transform"
      >
        <div className="-rotate-45">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2F3C9E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </div>
      </motion.button>
    </div>
  );
}
