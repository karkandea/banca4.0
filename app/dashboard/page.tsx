"use client";
import React, { useState } from "react";
import { Bell, MapPin, Calendar, Home, User, Grid } from "lucide-react";
import { useRouter } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import MenuModal from "@/components/MenuModal";

export default function DashboardPage() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const campaigns = [
    { id: "livin", title: "Livin", stats: { campaign: 3, submit: 3, issued: 3, drop: 3, leads: 0 }, img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop" },
    { id: "socmed", title: "Socmed & Website", stats: { campaign: 2, submit: 2, issued: 2, drop: 2, leads: 9 }, img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" }
  ];

  return (
    <div className="w-full min-h-screen bg-[#F8F9FA] pb-[120px] font-sans text-[#333]">
      
      {/* 1. Header Section */}
      <div className="relative bg-[#2F3C9E] text-white pt-[50px] pb-[30px] px-[24px] overflow-hidden">
        <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="flex justify-between items-start mb-6 z-10 relative">
           <div>
             <h1 className="text-[20px] font-bold">
               Perfect <span className="text-[#FBCB4F]">Assistant</span>
             </h1>
           </div>
           <button className="p-2 relative">
             <Bell className="w-6 h-6 text-white" />
             <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-[#2F3C9E]"></span>
           </button>
        </div>

        <div className="flex items-center gap-4 z-10 relative">
           <div className="w-[52px] h-[52px] rounded-full overflow-hidden border-2 border-white/30">
              <img src="https://i.pravatar.cc/150?u=ambar" alt="Profile" className="w-full h-full object-cover" />
           </div>
           <div>
              <p className="text-white/80 text-sm font-medium">Good Morning,</p>
              <p className="text-white text-xl font-bold">Citrayani</p>
           </div>
        </div>
      </div>

      {/* 2. Hero Stats Strip - Redirects to Semua Leads */}
      <div 
        onClick={() => router.push("/dashboard/leads")}
        className="relative h-[110px] w-full z-20 cursor-pointer overflow-hidden"
      >
         <div className="absolute inset-0">
             <img 
               src="/Assets/family.jpg" 
               alt="Family" 
               className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-black/40"></div>
         </div>
         
         <div className="relative z-10 h-full flex items-center justify-between px-[24px]">
             <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-white text-[12px]">
                 <div className="flex justify-between w-[95px]">
                    <span className="font-medium text-yellow-300">Appointment</span>
                    <span className="font-bold text-sm">6</span>
                 </div>
                 <div className="flex justify-between w-[70px]">
                    <span className="font-medium">Submit</span>
                    <span className="font-bold text-sm">9</span>
                 </div>
                 <div className="flex justify-between w-[95px]">
                    <span className="font-medium text-yellow-300">Issued</span>
                    <span className="font-bold text-sm">3</span>
                 </div>
                 <div className="flex justify-between w-[70px]">
                    <span className="font-medium">Drop</span>
                    <span className="font-bold text-sm">9</span>
                 </div>
             </div>

             <div className="text-right text-white leading-tight">
                 <div className="text-[10px] font-medium opacity-90">Total Leads<br/>Final campaign</div>
                 <div className="text-[36px] font-bold leading-none">27</div>
             </div>
         </div>
      </div>

      {/* 3. Leaderboard Card - Redirects to Leaderboard Detail */}
      <div 
        onClick={() => router.push("/dashboard/leaderboard")}
        className="px-[24px] mt-[24px] relative z-10 cursor-pointer"
      >
         <div className="bg-[#1F366A] rounded-[24px] p-5 pb-4 relative mt-4 shadow-xl text-white">
             <div className="absolute -top-[14px] left-1/2 -translate-x-1/2 w-[160px] h-[36px] bg-[#D43636] flex items-center justify-center shadow-md z-20">
                <div className="absolute -left-2 top-2 w-4 h-full bg-[#911D1D] -z-10 skew-y-[20deg] origin-top-right"></div>
                <div className="absolute -right-2 top-2 w-4 h-full bg-[#911D1D] -z-10 skew-y-[-20deg] origin-top-left"></div>
                <span className="text-white font-bold text-sm tracking-wide uppercase">Leaderboard</span>
             </div>

             <div className="absolute -top-[5px] -left-[5px] w-[50px] h-[50px] overflow-hidden z-20">
                 <div className="bg-[#D43636] absolute top-[10px] left-[-20px] w-[90px] h-[20px] -rotate-45 flex items-center justify-center text-[10px] font-bold shadow-sm">
                    MTD
                 </div>
             </div>

             <div className="mt-6 flex flex-col gap-4">
                 {[
                    { rank: 1, name: "Albert Rahardian", team: "Citrayani Team", score: "600,000,000", badge: "MDRT", medal: "🥇" },
                    { rank: 2, name: "Adi Santoso", team: "Citrayani Team", score: "120,000,000", medal: "🥈" },
                    { rank: 3, name: "Budi Hartono", team: "Citrayani Team", score: "120,000,000", medal: "🥉" },
                 ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                        <div className="w-6 flex justify-center text-sm font-bold">{item.medal}</div>
                        <div className="flex-1">
                           <p className="font-bold text-sm truncate">{item.name}</p>
                           <p className="text-[10px] text-white/60">{item.team}</p>
                           <p className="text-[10px] text-white/60">{item.score}</p>
                        </div>
                        {item.badge && (
                            <span className="bg-[#F98F2E] text-black text-[10px] font-bold px-2 py-0.5 rounded-full">
                                {item.badge}
                            </span>
                        )}
                    </div>
                 ))}
             </div>

             <div className="mt-4 text-center">
                <button className="text-xs font-bold text-white/90 underline decoration-white/50 underline-offset-4 pointer-events-none">Lihat detail</button>
             </div>
         </div>
      </div>

      {/* 4. Current Campaign Section */}
      <div className="px-[24px] mt-[32px]">
          <h2 className="text-[18px] font-bold text-gray-900 mb-4 font-inter">Current Campaign</h2>
          
          <div className="grid grid-cols-2 gap-4">
              {campaigns.map((camp) => (
                <div 
                  key={camp.id}
                  onClick={() => router.push(`/dashboard/campaign/${camp.id}`)}
                  className="h-[240px] rounded-[16px] relative overflow-hidden bg-gray-900 shadow-md cursor-pointer group"
                >
                    <img src={camp.img} className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
                    <div className="absolute top-4 left-4 z-10">
                        <p className="text-[10px] text-white/80">Campaign</p>
                        <h3 className="text-lg font-bold text-white leading-tight">{camp.title}</h3>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 z-10 space-y-3">
                         <div className="flex justify-between text-[10px] text-white/90">
                             <div className="flex flex-col gap-0.5">
                                 <span>Campaign</span>
                                 <span>Submit</span>
                                 <span>Issued</span>
                                 <span>Drop</span>
                             </div>
                             <div className="flex flex-col gap-0.5 text-right font-bold">
                                 <span>{camp.stats.campaign}</span>
                                 <span>{camp.stats.submit}</span>
                                 <span>{camp.stats.issued}</span>
                                 <span>{camp.stats.drop}</span>
                             </div>
                         </div>
                         <div className="flex justify-between items-end text-white border-t border-white/20 pt-2">
                             <span className="text-[12px] font-bold">Total leads</span>
                             <span className="text-[20px] font-bold">{camp.stats.leads}</span>
                         </div>
                    </div>
                </div>
              ))}
          </div>
          
          <div className="flex justify-end mt-3">
              <button className="text-[12px] font-bold text-[#00008F]">Lihat Daftar</button>
          </div>
      </div>

      {/* 5. Janji Temu Section */}
      <div className="px-[24px] mt-[32px] mb-[60px]">
          <h2 className="text-[18px] font-bold text-gray-900 mb-4 font-inter">Janji Temu Terdekat</h2>
          
          <div className="flex items-center gap-2 mb-4 text-[#D43636] font-bold text-sm">
              <Calendar className="w-4 h-4 fill-current" />
              <span>29 Juni 2025</span>
          </div>

          <div className="flex flex-col gap-3">
             {[1, 2, 3].map((item, i) => (
                 <div 
                   key={i} 
                   onClick={() => router.push("/dashboard/profile-detail")}
                   className="bg-white rounded-[20px] p-4 shadow-sm border border-gray-100 flex gap-4 relative cursor-pointer active:scale-[0.98] transition-all"
                 >
                     <div className="w-[48px] h-[48px] rounded-full bg-[#00008F] flex items-center justify-center text-white font-bold shrink-0">
                         VN
                     </div>
                     <div className="flex-1 min-w-0">
                         <div className="flex justify-between items-start">
                             <h4 className="font-bold text-sm text-gray-800 truncate pr-16">Vonne Fagelien Lumintang</h4>
                             <div className="bg-[#0000FF] text-white text-[9px] font-bold px-3 py-1.5 rounded-lg absolute right-4">
                                 Appointment
                             </div>
                         </div>
                         <p className="text-[11px] text-gray-400 font-medium mt-1">Sabtu, 29 Juni 2024</p>
                         <div className="flex items-center gap-1 mt-1 text-gray-400 text-[10px]">
                             <MapPin className="w-3 h-3" />
                             <span className="truncate">Jl. Halim Perdana kusuma Blok CC/3...</span>
                         </div>
                     </div>
                 </div>
             ))}
          </div>
      </div>

      {/* FAB - Tambah Leads */}
      <div className="fixed bottom-[100px] right-6 z-30 group">
          <button className="w-16 h-16 rounded-full shadow-2xl active:scale-90 transition-transform">
             <img src="/Assets/Icons/Tambah Leads.png" alt="Tambah Leads" className="w-full h-full object-contain" />
          </button>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 z-40 w-full max-w-[440px]">
          <div className="relative h-[80px] bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.05)] rounded-t-[32px] flex justify-between items-center px-[50px]">
              <button 
                onClick={() => router.push("/dashboard")}
                className="flex flex-col items-center gap-1 text-[#00008F]"
              >
                  <Home className="w-6 h-6 fill-current" />
                  <span className="text-[10px] font-bold">Home</span>
              </button>

              <div className="absolute top-[-25px] left-1/2 -translate-x-1/2">
                   <button 
                     onClick={() => setIsMenuOpen(true)}
                     className="w-[72px] h-[72px] bg-[#2F365F] rounded-[24px] rotate-45 flex items-center justify-center shadow-xl border-4 border-[#F8F9FA] active:scale-95 transition-transform"
                   >
                       <div className="-rotate-45">
                           <img src="/Assets/Icons/Menu.svg" className="w-7 h-7 brightness-0 invert" alt="Menu" />
                       </div>
                   </button>
              </div>

              <button 
                onClick={() => router.push("/profile")}
                className="flex flex-col items-center gap-1 text-gray-300 hover:text-[#00008F] transition-colors"
              >
                  <div className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center">
                    <User className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold">Profile</span>
              </button>
          </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <MenuModal onClose={() => setIsMenuOpen(false)} />
        )}
      </AnimatePresence>

    </div>
  );
}
