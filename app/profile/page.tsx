"use client";
import React from "react";
import { ChevronLeft, Star, Clock, Calendar, LogOut, Home, User } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function ProfilePage() {
  const router = useRouter();

  return (
    <div className="w-full min-h-screen bg-[#F8F9FA] pb-[100px] font-sans">
      {/* Header */}
      <div className="bg-[#2F3C9E] text-white pt-[50px] pb-4 px-6 flex items-center justify-between sticky top-0 z-10">
        <button onClick={() => router.back()} className="p-2">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-bold">Profil Saya</h1>
        <div className="w-10" /> {/* Spacer */}
      </div>

      <div className="px-5 py-6 space-y-6">
        {/* Insurance Card */}
        <div className="relative w-full aspect-[1.6/1] bg-gradient-to-br from-[#E1F5FD] to-[#B3E5FC] rounded-2xl shadow-md p-4 overflow-hidden">
          <div className="flex gap-4 items-start relative z-10">
            <div className="w-20 h-24 bg-gray-200 rounded-lg overflow-hidden shrink-0">
               <img src="https://i.pravatar.cc/150?u=ambar" alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-1">
              <h2 className="font-bold text-gray-800 text-sm">Alya Putri Permatasari</h2>
              <p className="text-[10px] text-gray-500">PT AXA MANDIRI FINANCIAL SERVICES</p>
              <div className="text-[10px] text-gray-700 grid grid-cols-2 gap-x-2">
                <span>Kode Agen</span>
                <span>: 024902</span>
                <span>No. Lisensi</span>
                <span>: 14829424</span>
              </div>
            </div>
          </div>
          <div className="mt-8 flex justify-between items-end relative z-10">
             <div className="space-y-1">
                <p className="text-[8px] text-gray-500">Disertifikasi sejak</p>
                <p className="text-[10px] font-bold text-gray-800">29/okt/2018</p>
             </div>
             <div className="space-y-1 text-right">
                <p className="text-[8px] text-gray-500">Berlaku s/d</p>
                <p className="text-[10px] font-bold text-gray-800">29/okt/2024</p>
             </div>
          </div>
          <div className="absolute right-[-20px] top-4 w-32 h-32 opacity-20">
             <img src="https://upload.wikimedia.org/wikipedia/commons/e/ee/World_map_blank_without_borders.svg" className="w-full h-full" />
          </div>
        </div>

        {/* User Card */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col items-center">
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#2F3C9E]/10 mb-4">
            <img src="https://i.pravatar.cc/150?u=ambar" alt="Ambar" className="w-full h-full object-cover" />
          </div>
          <h2 className="text-xl font-bold text-gray-800">Ambar Susilawati</h2>
          <div className="flex gap-2 text-sm mt-1">
            <span className="text-gray-400">ID : 024902</span>
            <span className="text-blue-500">ambar@axa-mandiri.com</span>
          </div>
          <button className="mt-4 px-6 py-2 border border-gray-200 rounded-xl text-sm font-medium flex items-center gap-2">
            ✏️ Ubah Profil
          </button>
        </div>

        {/* Stats List */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">
           <div className="px-6 py-6 space-y-6">
              <div className="bg-[#415372] w-fit px-4 py-1.5 rounded-lg flex items-center gap-2 text-white">
                 <User className="w-4 h-4" />
                 <span className="text-sm font-bold">Life Planner Batch 5</span>
              </div>

              <div className="flex justify-between items-center text-sm">
                <div className="flex items-center gap-3 text-gray-400 font-medium">
                  <Star className="w-5 h-5" />
                  <span>Ratings</span>
                </div>
                <span className="font-bold text-gray-800">4.6/5</span>
              </div>

              <div className="flex justify-between items-center text-sm pt-2">
                <div className="flex items-center gap-3 text-gray-400 font-medium">
                  <Clock className="w-5 h-5" />
                  <span>LOS (Length of Service)</span>
                </div>
                <span className="font-bold text-gray-800">13 Bulan</span>
              </div>

              <div className="flex justify-between items-center text-sm pt-2">
                <div className="flex items-center gap-3 text-gray-400 font-medium">
                  <Calendar className="w-5 h-5" />
                  <span>Bergabung Sejak</span>
                </div>
                <span className="font-bold text-gray-800">17 Nov 2023</span>
              </div>
           </div>
        </div>

        {/* Logout Button */}
        <button 
          onClick={() => router.push("/")}
          className="w-full py-4 bg-white border border-gray-100 rounded-2xl shadow-sm text-pink-500 font-bold active:scale-95 transition-transform"
        >
          Log out
        </button>
      </div>

      {/* Bottom Nav */}
      <div className="fixed bottom-0 z-40 w-full max-w-[440px]">
          <div className="relative h-[80px] bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.05)] rounded-t-[24px] flex justify-between items-center px-[50px]">
              <button 
                onClick={() => router.push("/dashboard")}
                className="flex flex-col items-center gap-1 text-gray-400"
              >
                  <Home className="w-6 h-6" />
                  <span className="text-[10px] font-bold">Home</span>
              </button>

              <div className="absolute top-[-25px] left-1/2 -translate-x-1/2">
                   <div className="w-[64px] h-[64px] bg-[#2F365F] rounded-[18px] rotate-45 flex items-center justify-center shadow-xl border-4 border-[#F8F9FA]">
                       <div className="-rotate-45 text-white">
                           <img src="/assets/Icons/Menu.svg" className="w-7 h-7 brightness-0 invert" alt="Menu" />
                       </div>
                   </div>
              </div>

              <button className="flex flex-col items-center gap-1 text-[#2F3C9E]">
                  <div className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center">
                    <User className="w-4 h-4 fill-current" />
                  </div>
                  <span className="text-[10px] font-bold">Profile</span>
              </button>
          </div>
      </div>
    </div>
  );
}
