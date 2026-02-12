"use client";
import React, { useState } from "react";
import { LogOut, ChevronDown, Filter, LayoutGrid } from "lucide-react";
import { useRouter } from "next/navigation";
import SLMenuModal from "@/components/SLMenuModal";

export default function SalesLeaderDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("Produksi");
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);

  return (
    <div className="min-h-screen w-full bg-[#FAFAFA] pb-24 font-inter text-[#333]">
        {/* Header Section with Blue Gradient Background */}
        <div className="relative w-full overflow-hidden bg-gradient-to-br from-[#2F65F7] via-[#2F65F7] to-[#86A8FF] rounded-b-[40px] pt-12 pb-24 px-6 shadow-xl z-20">
            {/* Top Bar */}
            <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-1">
                    <span className="text-white font-bold text-lg">Perfect</span>
                    <span className="text-[#FBCB4F] font-bold text-lg">Assistant</span>
                </div>
                <button 
                    onClick={() => router.push("/")}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-white/90 text-[10px] font-medium hover:bg-white/20 transition-colors"
                >
                    <LogOut className="w-3 h-3" />
                    <span>Sign Out</span>
                </button>
            </div>

            {/* Profile Section */}
            <div className="flex items-center gap-4">
                <div className="w-[50px] h-[50px] rounded-full border-[2px] border-white overflow-hidden bg-gray-300 shadow-md">
                    <img src="https://i.pravatar.cc/150?u=helda" alt="Helda Merna" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col text-white">
                    <span className="text-[12px] font-normal opacity-90">Good Morning,</span>
                    <span className="text-[18px] font-bold leading-tight">Helda Merna</span>
                </div>
            </div>
        </div>

        {/* Main Content - Floating up to overlap header */}
        <div className="relative z-30 px-5 -mt-16 flex flex-col gap-5">
            
            {/* Toggle Switch */}
            <div className="self-center bg-white rounded-full p-[5px] flex shadow-[0_4px_20px_rgba(0,0,0,0.1)] w-full max-w-[320px]">
                <button 
                    onClick={() => setActiveTab("Produksi")}
                    className={`flex-1 py-3 rounded-full text-[13px] font-bold text-center transition-all duration-300 ${activeTab === "Produksi" ? "bg-black text-white shadow-md" : "bg-transparent text-gray-500 hover:bg-gray-50"}`}
                >
                    Produksi
                </button>
                <button 
                    onClick={() => setActiveTab("Aktivitas")}
                    className={`flex-1 py-3 rounded-full text-[13px] font-bold text-center transition-all duration-300 ${activeTab === "Aktivitas" ? "bg-black text-white shadow-md" : "bg-transparent text-gray-500 hover:bg-gray-50"}`}
                >
                    Aktivitas
                </button>
            </div>

            {/* Key Drivers Card */}
            <div className="rounded-[24px] p-5 text-white shadow-[0_10px_30px_rgba(30,58,138,0.2)] relative overflow-hidden h-[240px] flex flex-col justify-between group bg-[#1F366A]">
                {/* Background Image & Overlay */}
                <div className="absolute inset-0 z-0">
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&fit=crop" className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105" alt="Key Drivers" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0F1E45]/95 via-[#0F1E45]/70 to-[#0F1E45]/30" />
                </div>

                <div className="relative z-10 w-full">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-[16px] font-bold text-white">Key Drivers<span className="text-[#3b82f6] text-xs align-top ml-0.5">●</span></h2>
                        <button className="flex items-center gap-1 px-3 py-1.5 rounded-[8px] bg-white/20 text-[11px] text-white border border-white/20 backdrop-blur-md hover:bg-white/30 transition-colors">
                            <Filter className="w-3 h-3" />
                            <span>Filter</span>
                            <ChevronDown className="w-3 h-3 ml-1" />
                        </button>
                    </div>

                    <div className="grid grid-cols-3 gap-y-6 gap-x-2 text-center">
                        <div className="flex flex-col">
                            <span className="text-[20px] font-bold leading-none">1208</span>
                            <span className="text-[9px] text-white/60 mt-1 uppercase tracking-wider font-medium">APE</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[20px] font-bold leading-none">20</span>
                            <span className="text-[9px] text-white/60 mt-1 uppercase tracking-wider font-medium">Case Count</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[20px] font-bold leading-none">726</span>
                            <span className="text-[9px] text-white/60 mt-1 uppercase tracking-wider font-medium">Case Size</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[20px] font-bold leading-none">1208</span>
                            <span className="text-[9px] text-white/60 mt-1 uppercase tracking-wider font-medium">PRAPE</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[20px] font-bold leading-none">20</span>
                            <span className="text-[9px] text-white/60 mt-1 uppercase tracking-wider font-medium">PRCC</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[20px] font-bold leading-none">726</span>
                            <span className="text-[9px] text-white/60 mt-1 uppercase tracking-wider font-medium">Man Power</span>
                        </div>
                    </div>
                </div>

                <div className="relative z-10 mt-auto flex justify-end">
                    <button className="text-[10px] font-bold underline decoration-white/40 underline-offset-2 hover:decoration-white transition-all">Lihat Detail</button>
                </div>
            </div>

            {/* Performance Bar Card */}
            <div className="rounded-[24px] p-5 text-white shadow-[0_10px_30px_rgba(0,0,0,0.2)] relative overflow-hidden h-[260px] bg-black group">
                {/* Background Image & Overlay */}
                 <div className="absolute inset-0 z-0">
                    <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=600" className="w-full h-full object-cover opacity-60 mix-blend-overlay grayscale group-hover:scale-105 transition-transform duration-700" alt="Performance" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0B1121] via-[#0B1121]/90 to-[#0B1121]" />
                </div>

                <div className="relative z-10 h-full flex flex-col">
                    <h2 className="text-[16px] font-bold mb-6">Performance bar<span className="text-[#3b82f6] text-xs align-top ml-0.5">●</span></h2>
                    
                    {/* Chart Container */}
                    <div className="flex-1 flex justify-between items-end pb-2 px-1 gap-2">
                        {[
                            { month: 'Jan', v1: 60, v2: 80 },
                            { month: 'Feb', v1: 80, v2: 60 },
                            { month: 'Mar', v1: 75, v2: 70 },
                            { month: 'Apr', v1: 90, v2: 85 },
                            { month: 'Mei', v1: 100, v2: 80 },
                            { month: 'Jun', v1: 85, v2: 75 },
                            { month: 'Jul', v1: 90, v2: 70 },
                            { month: 'Aug', v1: 95, v2: 60 },
                        ].map((d, i) => (
                            <div key={i} className="flex flex-col items-center gap-2 group/bar w-full h-full justify-end">
                                <div className="flex items-end gap-[3px] h-full w-full justify-center">
                                    <div className="w-[6px] bg-[#1d4ed8] rounded-t-[2px] relative group-hover/bar:bg-[#3b82f6] transition-colors shadow-[0_0_10px_rgba(29,78,216,0.5)]" style={{ height: `${d.v1}%` }}></div>
                                    <div className="w-[6px] bg-white/90 rounded-t-[2px] relative" style={{ height: `${d.v2}%` }}></div>
                                </div>
                                <span className="text-[9px] font-bold text-white/70">{d.month}</span>
                            </div>
                        ))}
                    </div>

                    {/* Legend */}
                    <div className="flex gap-4 mt-1">
                        <div className="flex items-center gap-2">
                            <div className="w-2.5 h-2.5 bg-[#1d4ed8] rounded-[2px]"></div>
                            <span className="text-[10px] text-white/50 font-medium">APE</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2.5 h-2.5 bg-white/90 rounded-[2px]"></div>
                            <span className="text-[10px] text-white/50 font-medium">Case Count</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product Mix Card */}
            <div className="rounded-[24px] p-5 text-white shadow-[0_10px_30px_rgba(46,55,77,0.3)] relative overflow-hidden bg-[#2C3444] group">
                 {/* Background Image & Overlay */}
                 <div className="absolute inset-0 z-0">
                    <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover opacity-20 mix-blend-overlay group-hover:scale-105 transition-transform duration-700" alt="Office" />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#2C3444]/95 to-[#1F2937]/95" />
                 </div>

                 <div className="relative z-10">
                    <div className="flex justify-between items-start mb-4">
                        <h2 className="text-[16px] font-bold">Product Mix<span className="text-[#3b82f6] text-xs align-top ml-0.5">●</span></h2>
                        <div className="flex gap-2">
                            <button className="flex items-center gap-1 px-2.5 py-1 bg-white text-black rounded-full text-[10px] font-bold hover:bg-gray-100 transition-colors">
                                <span>APE</span>
                                <ChevronDown className="w-3 h-3" />
                            </button>
                            <button className="flex items-center gap-1 px-2.5 py-1 bg-white text-black rounded-full text-[10px] font-bold hover:bg-gray-100 transition-colors">
                                <span>Filter</span>
                                <ChevronDown className="w-3 h-3" />
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center relative my-6">
                        {/* Pie Chart Representation */}
                        <div 
                            className="w-[160px] h-[160px] rounded-full relative shadow-2xl"
                            style={{
                                background: `conic-gradient(
                                    #1e3a8a 0deg 240deg, 
                                    #FBCB4F 240deg 360deg
                                )`
                            }}
                        >
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 mt-4">
                        <div className="flex flex-col items-center">
                            <div className="flex items-center gap-1.5 mb-1">
                                <div className="w-2 h-2 rounded-full bg-[#FBCB4F] shadow-[0_0_8px_#FBCB4F]"></div>
                                <span className="text-[9px] font-bold text-white/50 uppercase">MSCC</span>
                            </div>
                            <span className="text-[14px] font-bold">12,423</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="flex items-center gap-1.5 mb-1">
                                <div className="w-2 h-2 rounded-full bg-[#EA580C] shadow-[0_0_8px_#EA580C]"></div> 
                                <span className="text-[9px] font-bold text-white/50 uppercase">MSCC</span>
                            </div>
                            <span className="text-[14px] font-bold">12,423</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="flex items-center gap-1.5 mb-1">
                                <div className="w-2 h-2 rounded-full bg-[#1e3a8a] shadow-[0_0_8px_#1e3a8a]"></div>
                                <span className="text-[9px] font-bold text-white/50 uppercase">MSLC</span>
                            </div>
                            <span className="text-[14px] font-bold">12,423</span>
                        </div>
                    </div>
                 </div>
            </div>

            {/* Leaderboard Card - Matching LP Dashboard Style */}
            <div className="bg-[#1F366A] rounded-[24px] p-5 pb-4 relative mt-4 shadow-xl text-white">
                {/* Ribbon Header */}
                <div className="absolute -top-[14px] left-1/2 -translate-x-1/2 w-[160px] h-[36px] bg-[#D43636] flex items-center justify-center shadow-md z-20">
                    <div className="absolute -left-2 top-2 w-4 h-full bg-[#911D1D] -z-10 skew-y-[20deg] origin-top-right"></div>
                    <div className="absolute -right-2 top-2 w-4 h-full bg-[#911D1D] -z-10 skew-y-[-20deg] origin-top-left"></div>
                    <span className="text-white font-bold text-sm tracking-wide uppercase">Leaderboard</span>
                </div>

                {/* MTD Badge */}
                <div className="absolute -top-[5px] -left-[5px] w-[50px] h-[50px] overflow-hidden z-20">
                    <div className="bg-[#D43636] absolute top-[10px] left-[-20px] w-[90px] h-[20px] -rotate-45 flex items-center justify-center text-[10px] font-bold shadow-sm">
                    MTD
                    </div>
                </div>

                <div className="mt-8 flex flex-col gap-4">
                    {[
                        { rank: 1, name: "Albert Rahardian", score: "650.000.000", badge: "MDRT", medal: "🥇" },
                        { rank: 2, name: "Rizky Raditya", score: "120.000.000", medal: "🥈" },
                        { rank: 3, name: "Indah Permata", score: "90.000.000", medal: "🥉" },
                        { rank: 4, name: "Ivany", score: "70.000.000" },
                        { rank: 5, name: "Alexander William", score: "50.000.000" },
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <div className="w-6 flex justify-center text-[14px] font-bold text-white/90 drop-shadow-md">{item.medal || item.rank}</div>
                            <div className="flex-1 border-b border-white/10 pb-3 group-last:border-none">
                                <h4 className="font-bold text-[13px] tracking-tight">{item.name}</h4>
                                <p className="text-[10px] text-white/60 font-medium mt-0.5">{item.score}</p>
                            </div>
                            {item.badge && (
                                <span className="bg-[#F59E0B] text-black text-[9px] font-extrabold px-2 py-0.5 rounded-[4px] shadow-sm tracking-wide">
                                    {item.badge}
                                </span>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-4 text-center">
                    <button className="text-[11px] font-bold text-white/90 underline decoration-white/30 hover:decoration-white transition-all underline-offset-2">Lihat detail</button>
                </div>
            </div>

            {/* Spacer for Floating Button */}
            <div className="h-16"></div>

        </div>

    {/* Floating Menu Button */}
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
        <button 
            onClick={() => setIsMenuModalOpen(true)}
            className="bg-white text-black px-6 py-3 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.15)] flex items-center gap-3 active:scale-95 transition-transform"
        >
            <LayoutGrid className="w-5 h-5" />
            <span className="font-bold text-sm">Menu</span>
        </button>
    </div>

    {/* Menu Modal */}
    <SLMenuModal isOpen={isMenuModalOpen} onClose={() => setIsMenuModalOpen(false)} />
    </div>
  );
}
