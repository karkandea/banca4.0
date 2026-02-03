"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Search, SlidersHorizontal, Calendar, CreditCard, UserSquare2, ArrowDownAZ, ArrowUpAZ } from "lucide-react";
import { teleUwData } from "./data";

export default function TeleUWPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("All");
  const [isSortedAsc, setIsSortedAsc] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter Data based on activeTab
  const filteredData = teleUwData.filter((item) => {
    if (activeTab === "All") return true;
    if (activeTab === "Open") return item.status === "New" || item.status === "Open";
    return item.status === activeTab;
  });

  // Filter by Search
  const searchedData = filteredData.filter((item) => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sort Data
  const sortedData = [...searchedData].sort((a, b) => {
    if (isSortedAsc) {
      return a.name.localeCompare(b.name);
    }
    return 0; 
  });

  return (
    <div className="w-full min-h-screen bg-[#F4F6F9] font-sans pb-10">
      {/* Header */}
      <div className="bg-[#2F3C9E] px-6 pt-12 pb-6 flex items-center gap-4 text-white shadow-md">
        <button onClick={() => router.push("/dashboard")} className="active:scale-90 transition-transform">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-bold flex-1 text-center pr-6">Daftar TeleUW</h1>
      </div>

      {/* Search and Filters */}
      <div className="px-6 py-4 space-y-4">
        <div className="flex gap-3">
          <div className="flex-1 bg-white rounded-full px-4 h-12 flex items-center gap-3 shadow-sm">
            <Search className="w-5 h-5 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search &quot; Adinda Rahma &quot;" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 outline-none text-sm text-gray-700 placeholder:text-gray-400"
            />
          </div>
          <button 
            onClick={() => setIsSortedAsc(!isSortedAsc)}
            className={`w-12 h-12 rounded-full flex items-center justify-center shadow-sm active:scale-95 transition-all
              ${isSortedAsc ? "bg-[#2F3C9E] text-white" : "bg-white text-gray-700"}
            `}
          >
            {isSortedAsc ? <ArrowDownAZ className="w-6 h-6" /> : <ArrowDownAZ className="w-6 h-6 opacity-40" />}
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {["All", "Open", "Progress", "Close", "Hold"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-colors
                ${activeTab === tab ? "bg-[#1F366A] text-white" : "bg-white text-gray-700 shadow-sm"}
              `}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* List Content */}
      <div className="px-6 space-y-4">
        {sortedData.length === 0 ? (
          <div className="text-center text-gray-400 py-10 text-sm">No data found</div>
        ) : (
          sortedData.map((item) => (
            <div 
              key={item.id} 
              onClick={() => router.push(`/dashboard/tele-uw/${item.id}`)}
              className={`rounded-[20px] p-5 shadow-sm ${item.cardBg} cursor-pointer active:scale-[0.98] transition-all`}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="font-bold text-gray-800">{item.name}</span>
                <span className={`text-[10px] font-bold px-3 py-1 rounded-full ${item.statusColor}`}>
                  {item.statusLabel}
                </span>
              </div>

              <div className="space-y-2">
                {/* ID Row */}
                <div className="flex items-center gap-3 text-gray-500 text-sm">
                  <div className="w-4 flex justify-center">
                    <UserSquare2 className="w-4 h-4 text-[#2F3C9E] fill-current opacity-80" />
                  </div>
                  <span>{item.userId}</span>
                </div>

                {/* Date Row */}
                <div className="flex items-center gap-3 text-sm">
                   <div className="w-4 flex justify-center">
                    <Calendar className="w-4 h-4 text-[#2F3C9E] fill-current opacity-80" />
                   </div>
                   <span className={item.isDateRed ? "text-[#D32F2F] font-medium" : "text-gray-500"}>
                     {item.date}
                   </span>
                </div>

                {/* Plan Row */}
                <div className="flex items-center gap-3 text-gray-500 text-sm">
                  <div className="w-4 flex justify-center">
                     <CreditCard className="w-4 h-4 text-[#2F3C9E] fill-current opacity-80" />
                  </div>
                  <span>{item.plan}</span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
