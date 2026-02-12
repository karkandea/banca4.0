"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  ListTodo, 
  Calendar, 
  RefreshCw, 
  MapPin, 
  Navigation, 
  Users, 
  MessageSquareText, 
  FileSearch 
} from "lucide-react";

interface SLMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { label: "Campaign Saya", icon: ListTodo, color: "bg-blue-500" },
  { label: "Aktivitas", icon: Calendar, color: "bg-blue-400" },
  { label: "Reassignment", icon: RefreshCw, color: "bg-blue-600" },
  { label: "Lokasi LP", icon: MapPin, color: "bg-sky-500" },
  { label: "Live Location", icon: Navigation, color: "bg-indigo-500" },
  { label: "Data Nasabah", icon: Users, color: "bg-blue-500" },
  { label: "After Sales", icon: MessageSquareText, color: "bg-indigo-400" },
  { label: "Policy Inquiry", icon: FileSearch, color: "bg-sky-400" },
];

export default function SLMenuModal({ isOpen, onClose }: SLMenuModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-[340px] bg-white rounded-[32px] p-8 pb-12 shadow-2xl z-10"
          >
            <div className="grid grid-cols-3 gap-y-8 gap-x-2">
              {menuItems.map((item, index) => (
                <div key={index} className="flex flex-col items-center gap-3 text-center cursor-pointer active:scale-95 transition-transform group">
                  <div className={`w-14 h-14 rounded-[18px] ${item.color.replace('bg-', 'bg-opacity-10 text-')} flex items-center justify-center shadow-sm group-hover:shadow-md transition-all bg-blue-50 text-blue-600`}>
                    <item.icon className="w-7 h-7" strokeWidth={1.5} />
                  </div>
                  <span className="text-[11px] font-bold text-gray-700 leading-tight max-w-[80px]">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Close Button */}
          <motion.button
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            onClick={onClose}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-[#1A1A1A] text-white px-6 py-3 rounded-full flex items-center gap-2 shadow-lg active:scale-95 transition-transform z-20"
          >
            <X className="w-4 h-4" />
            <span className="text-sm font-bold">Close</span>
          </motion.button>
        </div>
      )}
    </AnimatePresence>
  );
}
