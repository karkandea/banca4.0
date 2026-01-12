"use client";
import React from "react";
import { ChevronLeft, User, MapPin, Calendar, Clock, Bookmark, Phone, Send, SquarePen } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ProfileDetailPage() {
  const router = useRouter();

  const profileInfo = [
    { label: "Nama Korporasi", value: "Kementrian Kehutan" },
    { label: "Nama Lengkap", value: "Perempuan" },
    { label: "Jenis Kelamin", value: "Laki-laki" },
    { label: "Usia", value: "21 Tahun" },
    { label: "No Handphone", value: "081234567890" },
    { label: "Email", value: "Kevinarmada@hotmail.com" },
    { label: "Alamat Tempat Tinggal", value: "Jalan mardasah 1 RT000/RW000 Jakarta Pusat" },
  ];

  return (
    <div className="w-full min-h-screen bg-[#F8F9FA] pb-[120px] font-sans flex flex-col">
      {/* Header */}
      <div className="bg-[#2F3C9E] text-white pt-[50px] pb-5 px-6 flex items-center gap-4 sticky top-0 z-20">
        <button onClick={() => router.back()} className="p-1">
          <ChevronLeft className="w-7 h-7" />
        </button>
        <h1 className="text-xl font-bold flex-1 text-center pr-8">Profile Detail</h1>
      </div>

      <div className="px-5 py-6 flex-1">
        {/* Detail Card Container */}
        <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100 flex flex-col gap-8">
           
           {/* Status Section */}
           <div className="space-y-4">
              <div className="flex justify-between items-center">
                 <div className="space-y-2">
                    <p className="text-[12px] text-gray-400 font-medium tracking-tight">Status</p>
                    <div className="bg-[#D1F7E2] text-[#009F2D] px-4 py-1.5 rounded-full text-xs font-bold w-fit">
                       Checked - in
                    </div>
                 </div>
                 <button className="bg-[#3B4ED1] text-white px-5 py-2 rounded-xl text-xs font-bold shadow-md shadow-blue-900/10 active:scale-95 transition-transform">
                    Riwayat
                 </button>
              </div>
              
              <button className="w-full bg-[#000080] text-white py-4 rounded-[16px] font-bold flex items-center justify-center gap-3 active:scale-[0.98] transition-all shadow-lg shadow-blue-900/10">
                 <SquarePen className="w-5 h-5 opacity-80" />
                 Ubah Status
              </button>
           </div>

           <div className="h-[1px] bg-gray-100 w-full"></div>

           {/* Detail Profil Section */}
           <div className="space-y-6">
              <div className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-lg bg-[#2F3C9E]/10 flex items-center justify-center">
                    <User className="w-4 h-4 text-[#2F3C9E]" />
                 </div>
                 <h2 className="text-[#2F3C9E] font-bold text-lg">Detail Profil</h2>
              </div>

              <div className="space-y-5">
                 {profileInfo.map((info, i) => (
                    <div key={i} className="space-y-1">
                       <p className="text-[12px] text-gray-400 font-medium">{info.label}</p>
                       <p className="text-[14px] text-gray-800 font-bold">{info.value}</p>
                    </div>
                 ))}
              </div>
           </div>

           {/* Detail Janji Temu Section */}
           <div className="space-y-6 pt-2">
              <div className="flex items-center justify-between">
                 <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#2F3C9E]/10 flex items-center justify-center">
                       <MapPin className="w-4 h-4 text-[#2F3C9E]" />
                    </div>
                    <h2 className="text-[#2F3C9E] font-bold text-lg">Detail Janji Temu</h2>
                 </div>
                 <button className="text-[#2F3C9E] p-1">
                    <SquarePen className="w-5 h-5 stroke-[2.5]" />
                 </button>
              </div>

              {/* Map Card */}
              <div className="relative rounded-2xl overflow-hidden border border-gray-100 group">
                 <img 
                   src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=800&auto=format&fit=crop" 
                   alt="Map" 
                   className="w-full h-[180px] object-cover" 
                 />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-2xl scale-110">
                       <MapPin className="w-6 h-6 text-[#E11D48] fill-[#E11D48]" />
                    </div>
                 </div>
                 <button className="absolute bottom-4 right-4 bg-[#1F366A] text-white px-4 py-2.5 rounded-xl text-[11px] font-bold flex items-center gap-2 shadow-xl active:scale-95 transition-transform backdrop-blur-sm bg-opacity-90">
                    <MapPin className="w-3 h-3" />
                    Buka Map
                 </button>
              </div>

              {/* Appointment Footer Info */}
              <div className="space-y-4">
                 <div className="flex gap-3 items-center">
                    <div className="w-6 flex justify-center">
                       <Calendar className="w-4 h-4 text-gray-400" />
                    </div>
                    <span className="text-[13px] font-bold text-gray-700">Selasa, 30 April 2024</span>
                 </div>
                 <div className="flex gap-3 items-center">
                    <div className="w-6 flex justify-center">
                       <Clock className="w-4 h-4 text-gray-400" />
                    </div>
                    <span className="text-[13px] font-bold text-gray-700">10.00 WIB</span>
                 </div>
                 <div className="flex gap-3 items-start">
                    <div className="w-6 flex justify-center mt-1">
                       <MapPin className="w-4 h-4 text-gray-400" />
                    </div>
                    <span className="text-[13px] font-bold text-gray-700 line-clamp-2 leading-relaxed">JL. Halim Perdana kusuma Blok CC/3 RT04</span>
                 </div>
                 <div className="flex gap-3 items-center">
                    <div className="w-6 flex justify-center">
                       <Bookmark className="w-4 h-4 text-blue-400 fill-blue-100" />
                    </div>
                    <span className="text-[13px] font-black text-gray-800">B2B2C</span>
                 </div>
              </div>
           </div>
        </div>
      </div>

      {/* Bottom Sticky Actions */}
      <div className="fixed bottom-0 left-0 right-0 p-5 bg-white border-t border-gray-100 flex gap-4 z-30">
        <button className="flex-1 bg-[#00A32D] text-white py-4 rounded-[16px] font-bold flex items-center justify-center gap-2 active:scale-95 transition-transform shadow-lg shadow-green-900/10">
          Check-in
          <Send className="w-4 h-4 rotate-45" />
        </button>
        <button className="flex-1 bg-[#00008F] text-white py-4 rounded-[16px] font-bold active:scale-95 transition-transform shadow-lg shadow-blue-900/10">
          Hubungi Sekarang
        </button>
      </div>
    </div>
  );
}
