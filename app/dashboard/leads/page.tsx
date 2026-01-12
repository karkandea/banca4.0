"use client";
import React from "react";
import { ChevronLeft, Search, User } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SemuaLeadsPage() {
  const router = useRouter();

  const leads = [
    { name: "Vonne Engelien Lumintang", phone: "628123456789" },
    { name: "Vonne Engelien Lumintang", phone: "628123456789" },
    { name: "Vonne Engelien Lumintang", phone: "628123456789" },
    { name: "Vonne Engelien Lumintang", phone: "628123456789" },
    { name: "Vonne Engelien Lumintang", phone: "628123456789" },
    { name: "Vonne Engelien Lumintang", phone: "628123456789" },
  ];

  return (
    <div className="w-full min-h-screen bg-[#F8F9FA] pb-10">
      {/* Header */}
      <div className="bg-[#2F3C9E] text-white pt-[50px] pb-5 px-6 flex items-center gap-4 sticky top-0 z-20">
        <button onClick={() => router.back()} className="p-1">
          <ChevronLeft className="w-7 h-7" />
        </button>
        <h1 className="text-xl font-bold">Semua Leads</h1>
      </div>

      <div className="px-5 mt-6">
        {/* Search Bar */}
        <div className="relative mb-6">
           <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search className="w-5 h-5 text-gray-400" />
           </div>
           <input 
              className="w-full bg-[#E9E9E9] h-12 rounded-xl pl-12 pr-4 text-sm font-medium outline-none text-gray-800"
              placeholder="Cari Lead"
           />
        </div>

        {/* Info Header */}
        <div className="flex justify-between items-end mb-6">
           <div>
              <p className="text-[16px] font-bold text-gray-900">Total Leads</p>
              <p className="text-[12px] text-gray-500 font-medium">Di Semua Campaign</p>
           </div>
           <div className="flex items-center gap-2">
              <span className="text-3xl font-black text-gray-900">72</span>
              <User className="w-7 h-7 text-gray-400" />
           </div>
        </div>

        {/* Leads List */}
        <div className="space-y-4">
           {leads.map((item, i) => (
              <div 
                key={i} 
                onClick={() => router.push("/dashboard/profile-detail")}
                className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 relative group cursor-pointer active:scale-[0.98] transition-all"
              >
                  <div className="flex justify-between items-start mb-4">
                     <div>
                        <p className="text-[14px] font-bold text-gray-900">Total Leads</p>
                        <p className="text-[11px] text-gray-400">Di Semua Campaign</p>
                     </div>
                     <button className="text-[12px] font-bold text-blue-600 flex items-center gap-1 group-active:scale-95 transition-transform">
                        Appointment
                        <span className="text-[10px] scale-75 rotate-90">▲</span>
                     </button>
                  </div>
                  
                  <div className="flex items-center gap-4">
                     <div className="w-[48px] h-[48px] rounded-full bg-blue-600 flex items-center justify-center text-white font-bold shrink-0">
                         VN
                     </div>
                     <div>
                        <p className="text-[14px] font-bold text-gray-800">{item.name}</p>
                        <p className="text-[12px] text-gray-400 mt-0.5">{item.phone}</p>
                     </div>
                  </div>
              </div>
           ))}
        </div>
      </div>
    </div>
  );
}
