"use client";
import React, { useState, use } from "react";
import { ChevronLeft, Search, Filter, Calendar, MapPin } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CampaignDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const { id } = use(params);
  const [activeTab, setActiveTab] = useState("Appointment Activity");

  const title = id === "livin" ? "Livin" : id === "socmed" ? "Socmed & Website" : `Campaign ${id}`;

  const appointments = [
    { name: "Vonne Engelien Lumintang", date: "Kamis, 21 Maret 2024", time: "10.00 WIB", location: "Senayan City" },
    { name: "Vonne Engelien Lumintang", date: "Kamis, 21 Maret 2024", time: "10.00 WIB", location: "Senayan City" },
    { name: "Vonne Engelien Lumintang", date: "Kamis, 21 Maret 2024", time: "10.00 WIB", location: "Senayan City" },
    { name: "Vonne Engelien Lumintang", date: "Kamis, 21 Maret 2024", time: "10.00 WIB", location: "Senayan City" },
  ];

  return (
    <div className="w-full min-h-screen bg-[#F5F7F9] flex flex-col">
      {/* Header with Background Blur/Image Vibe */}
      <div className="relative h-[100px] bg-black/40 overflow-hidden shrink-0 flex items-center px-4">
          <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover -z-10" />
          <div className="absolute inset-0 bg-black/40 -z-10"></div>
          <button onClick={() => router.back()} className="p-2 text-white">
            <ChevronLeft className="w-7 h-7" />
          </button>
          <div className="flex-1 text-center pr-10">
            <h1 className="text-white font-bold text-lg">{title}</h1>
          </div>
      </div>

      {/* Tabs */}
      <div className="bg-white flex border-b border-gray-100 px-2 shrink-0">
          {["Appointment Activity", "Submit", "Issued"].map((tab) => (
             <button 
               key={tab}
               onClick={() => setActiveTab(tab)}
               className={`flex-1 flex items-center justify-center gap-2 py-4 text-xs font-bold transition-all relative ${activeTab === tab ? 'text-blue-700' : 'text-gray-400'}`}
             >
                {tab}
                <span className={`px-2 py-0.5 rounded-full text-[9px] ${activeTab === tab ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-500'}`}>
                   {tab === "Appointment Activity" ? "3" : "0"}
                </span>
                {activeTab === tab && <div className="absolute bottom-0 left-0 w-full h-[3px] bg-blue-700"></div>}
             </button>
          ))}
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto px-5 py-6">
        {/* Search & Filter Row */}
        <div className="flex gap-3 mb-6">
           <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-4 flex items-center">
                 <Search className="w-4 h-4 text-gray-400" />
              </div>
              <input 
                 className="w-full h-11 bg-white border border-gray-200 rounded-2xl pl-12 pr-4 text-xs font-medium outline-none shadow-sm"
                 placeholder='Search " Adinda Rahma "'
              />
           </div>
           <button className="w-11 h-11 bg-white border border-gray-200 rounded-2xl flex items-center justify-center shadow-sm">
              <div className="p-1 rounded bg-gray-50 border border-gray-100">
                <Filter className="w-4 h-4 text-gray-400" />
              </div>
           </button>
        </div>

        {/* List */}
        <div className="space-y-4 pb-10">
           {appointments.map((item, i) => (
              <div 
                key={i} 
                onClick={() => router.push("/dashboard/profile-detail")}
                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex gap-4 relative overflow-hidden group cursor-pointer active:scale-[0.98] transition-all"
              >
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold shrink-0">
                      VN
                  </div>
                  <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                         <h4 className="font-bold text-[13px] text-gray-900 group-hover:text-blue-600 transition-colors">{item.name}</h4>
                         <div className="bg-blue-600 text-white text-[10px] font-bold px-4 py-1.5 rounded-lg absolute right-4 top-4">
                            Appointment
                         </div>
                      </div>
                      <div className="space-y-1.5 text-[11px] text-blue-900/60 font-medium">
                         <div className="flex items-center gap-2">
                             <Calendar className="w-3.5 h-3.5" />
                             <span>{item.date}</span>
                         </div>
                         <div className="flex items-center gap-2">
                             <div className="w-3.5 h-3.5 rounded-full border-2 border-current flex items-center justify-center">
                                <span className="text-[7px]">●</span>
                             </div>
                             <span>{item.time}</span>
                         </div>
                         <div className="flex items-center gap-2">
                             <MapPin className="w-3.5 h-3.5" />
                             <span>{item.location}</span>
                         </div>
                      </div>
                  </div>
              </div>
           ))}
        </div>
      </div>
    </div>
  );
}
