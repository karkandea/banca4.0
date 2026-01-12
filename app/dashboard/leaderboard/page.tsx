"use client";
import React from "react";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LeaderboardDetailPage() {
  const router = useRouter();

  const otherRanks = [
    { rank: 4, name: "Siti Nurhaliza", team: "Citrayani Teurah", score: "120.000.000" },
    { rank: 5, name: "Siti Nurhaliza", team: "Citrayani Teurah", score: "120.000.000" },
    { rank: 6, name: "Siti Nurhaliza", team: "Citrayani Teurah", score: "120.000.000" },
    { rank: 7, name: "Siti Nurhaliza", team: "Citrayani Teurah", score: "120.000.000" },
    { rank: 8, name: "Fitri Ayu Puspitasari", team: "Citrayani Teurah", score: "120.000.000" },
    { rank: 9, name: "Ahmad Faisal", team: "Citrayani Teurah", score: "110.000.000" },
    { rank: 10, name: "Bambang Teguh", team: "Citrayani Teurah", score: "100.000.000" },
    { rank: 11, name: "Eka Putri", team: "Citrayani Teurah", score: "90.000.000" },
    { rank: 12, name: "Doni Setiawan", team: "Citrayani Teurah", score: "80.000.000" },
    { rank: 13, name: "Maya Sari", team: "Citrayani Teurah", score: "70.000.000" },
  ];

  return (
    <div className="w-full h-screen flex flex-col relative overflow-hidden bg-black">
      {/* Background Image Header - Full screen height */}
      <div className="absolute inset-0 z-0">
         <img src="/assets/axa-tower.jpg" className="w-full h-full object-cover" />
         <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Top Section - Header + Podium (Fixed) */}
      <div className="relative z-20 pt-[50px] px-6 pb-2 shrink-0">
        <div className="flex items-center justify-between text-white mb-6">
           <button onClick={() => router.back()} className="p-2 -ml-2">
             <ChevronLeft className="w-7 h-7" />
           </button>
           <h1 className="text-xl font-bold font-inter">Leaderboard MTD</h1>
           <div className="w-10" />
        </div>

        {/* Podium Section */}
        <div className="flex items-end justify-center gap-1 mt-2 h-[260px]">
           {/* Rank 2 - Silver */}
           <div className="flex flex-col items-center gap-2">
              <div className="relative w-16 h-16">
                 <img src="/assets/silver.png" className="w-full h-full object-contain" alt="Silver Medal" />
                 <span className="absolute top-[35%] left-1/2 -translate-x-1/2 text-white font-bold text-[10px]">COT</span>
              </div>
              <div className="bg-[#1F366A]/80 backdrop-blur-md p-3 rounded-2xl text-white text-center w-[110px] border border-white/20 shadow-lg">
                 <div className="flex flex-col items-center">
                    <span className="text-[14px] font-black mb-1">2</span>
                    <p className="text-[10px] font-bold line-clamp-1 leading-tight">Maharani Indi...</p>
                    <p className="text-[8px] opacity-70 leading-tight">Citrayani Teurah</p>
                    <div className="mt-2 bg-white/10 rounded-full px-2 py-1 flex items-center justify-center w-full">
                       <span className="text-[9px] font-bold">5.5M</span>
                    </div>
                 </div>
              </div>
           </div>

           {/* Rank 1 - Gold */}
           <div className="flex flex-col items-center gap-2 -mb-2 scale-110 z-10">
              <div className="relative w-20 h-20">
                 <img src="/assets/Gold.png" className="w-full h-full object-contain" alt="Gold Medal" />
                 <span className="absolute top-[35%] left-1/2 -translate-x-1/2 text-white font-bold text-[12px]">TOT</span>
              </div>
              <div className="bg-[#000030]/90 backdrop-blur-xl p-4 rounded-3xl text-white text-center w-[130px] border-2 border-yellow-400/40 shadow-2xl">
                 <div className="flex flex-col items-center">
                    <span className="text-[18px] font-black mb-1 text-yellow-400">1</span>
                    <p className="text-[11px] font-bold leading-tight">Adityananda P...</p>
                    <p className="text-[9px] opacity-70 leading-tight">Grace Tirtowidjojo</p>
                    <div className="mt-2 bg-yellow-400/20 rounded-full px-3 py-1 flex items-center justify-center w-full">
                       <span className="text-[10px] font-bold text-yellow-100">5.5M</span>
                    </div>
                 </div>
              </div>
           </div>

           {/* Rank 3 - Bronze */}
           <div className="flex flex-col items-center gap-2">
              <div className="relative w-16 h-16">
                 <img src="/assets/Bronze.png" className="w-full h-full object-contain" alt="Bronze Medal" />
                 <span className="absolute top-[35%] left-1/2 -translate-x-1/2 text-white font-bold text-[10px]">MDRT</span>
              </div>
              <div className="bg-[#1F366A]/80 backdrop-blur-md p-3 rounded-2xl text-white text-center w-[110px] border border-white/20 shadow-lg">
                 <div className="flex flex-col items-center">
                    <span className="text-[14px] font-black mb-1">3</span>
                    <p className="text-[10px] font-bold line-clamp-1 leading-tight">Sekar Amarty...</p>
                    <p className="text-[8px] opacity-70 leading-tight">Arnold Ivany</p>
                    <div className="mt-2 bg-white/10 rounded-full px-2 py-1 flex items-center justify-center w-full">
                       <span className="text-[9px] font-bold">5.5M</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>

      {/* List Section - Glassmorphism Bottom Sheet Panel */}
      <div className="flex-1 z-30 px-5 pt-8 pb-0 flex flex-col min-h-0">
         <div className="bg-white/10 backdrop-blur-xl rounded-t-[40px] border-t border-white/20 flex-1 flex flex-col overflow-hidden shadow-[0_-10px_30px_rgba(0,0,0,0.3)]">
            <div className="flex-1 overflow-y-auto px-4 py-8 scrollbar-hide">
               {otherRanks.map((item, i) => (
                 <div 
                   key={i} 
                   onClick={() => router.push("/dashboard/profile-detail")}
                   className="flex items-center justify-between p-4 border-b border-white/10 last:border-0 active:bg-white/5 transition-colors cursor-pointer group"
                 >
                     <div className="flex items-center gap-4">
                        <span className="text-white/40 font-black w-6 text-center text-xs">{item.rank}</span>
                        <div>
                           <p className="text-white font-bold text-sm tracking-tight group-hover:text-yellow-400 transition-colors uppercase">{item.name}</p>
                           <p className="text-white/50 text-[10px] font-medium">{item.team}</p>
                        </div>
                     </div>
                     <div className="text-right">
                        <p className="text-white text-[11px] font-black">{item.score}</p>
                     </div>
                 </div>
               ))}
               <div className="h-20"></div> {/* Bottom spacer */}
            </div>
         </div>
      </div>
    </div>
  );
}
