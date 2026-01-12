"use client";
import React, { useState, useMemo } from "react";
import { ChevronLeft, Search, SlidersHorizontal, Plus, Check } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const initialTransactions = [
  { name: "Karima Siswandi", id: "020-1234567", category: "POS (Non Financial)", date: "Sabtu, 07 Oktober 2024", status: "New", type: "POS", rawDate: new Date("2024-10-07") },
  { name: "Rizky Pratama", id: "020-1234567", category: "POS (Non Financial)", date: "Sabtu, 07 Oktober 2024", status: "New", type: "POS", rawDate: new Date("2024-10-07") },
  { name: "Dewi Lestari", id: "020-1234567", category: "POS (Non Financial)", date: "Sabtu, 07 Oktober 2024", status: "New", type: "POS", rawDate: new Date("2024-10-07") },
  { name: "Siti Nurhaliza", id: "010-2345678", category: "POS (Financial)", date: "Senin, 1 Oktober 2024", status: "Submit", type: "POS", rawDate: new Date("2024-10-01") },
  { name: "Andi Wijaya", id: "010-2345678", category: "POS (Financial)", date: "Senin, 1 Oktober 2024", status: "Submit", type: "POS", rawDate: new Date("2024-10-01") },
  { name: "Nina Anggraini", id: "010-2345678", category: "POS (Financial)", date: "Senin, 1 Oktober 2024", status: "Submit", type: "POS", rawDate: new Date("2024-10-01") },
  { id: "010-2345678", category: "CLAIM (Financial)", date: "Senin, 1 Oktober 2024", status: "Close", type: "CLAIM", rawDate: new Date("2024-10-01") },
];

export default function TransaksiPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const [appliedFilters, setAppliedFilters] = useState({
    status: ["New"],
    category: ["POS"],
    sort: "Nama A-Z"
  });

  const [tempFilters, setTempFilters] = useState(appliedFilters);

  const filteredTransactions = useMemo(() => {
    let result = [...initialTransactions];
    if (searchQuery) {
      result = result.filter(t => 
        (t.name?.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (t.id?.includes(searchQuery))
      );
    }
    if (appliedFilters.status.length > 0) {
      result = result.filter(t => appliedFilters.status.includes(t.status));
    }
    if (appliedFilters.category.length > 0) {
      result = result.filter(t => appliedFilters.category.includes(t.type));
    }
    result.sort((a, b) => {
      if (appliedFilters.sort === "Nama A-Z") return (a.name || "").localeCompare(b.name || "");
      if (appliedFilters.sort === "Nama Z-A") return (b.name || "").localeCompare(a.name || "");
      if (appliedFilters.sort === "Tanggal Terbaru") return b.rawDate.getTime() - a.rawDate.getTime();
      if (appliedFilters.sort === "Tanggal Terlama") return a.rawDate.getTime() - b.rawDate.getTime();
      return 0;
    });
    return result;
  }, [searchQuery, appliedFilters]);

  return (
    <div className="w-full min-h-screen bg-[#F8F9FA] pb-10 flex flex-col relative overflow-x-hidden max-w-[440px] mx-auto shadow-2xl">
      <div className="bg-[#2F3C9E] text-white pt-[50px] pb-5 px-6 flex items-center gap-4 sticky top-0 z-20">
        <button onClick={() => router.push("/dashboard")} className="p-1">
          <ChevronLeft className="w-7 h-7" />
        </button>
        <h1 className="text-xl font-bold flex-1 text-center pr-8">Transaksi</h1>
      </div>

      <div className="px-5 mt-6 flex-1">
        <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100 min-h-full flex flex-col gap-6">
          <div className="flex gap-3">
             <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-4 flex items-center">
                   <Search className="w-5 h-5 text-gray-300" />
                </div>
                <input 
                   className="w-full h-12 bg-[#F1F3F5] rounded-xl pl-12 pr-4 text-sm font-medium outline-none"
                   placeholder="Search"
                   value={searchQuery}
                   onChange={(e) => setSearchQuery(e.target.value)}
                />
             </div>
             <button 
               onClick={() => {
                 setTempFilters(appliedFilters);
                 setIsFilterOpen(true);
               }}
               className="w-12 h-12 border border-gray-200 rounded-xl flex items-center justify-center active:scale-90 transition-transform"
             >
                <SlidersHorizontal className="w-5 h-5 text-gray-400" />
             </button>
          </div>

          <div className="flex flex-col gap-4">
             {filteredTransactions.map((item, i) => (
                <div 
                  key={i} 
                  onClick={() => router.push("/dashboard/transaksi/detail")}
                  className="bg-white rounded-2xl p-5 border border-gray-100 flex justify-between items-center group active:bg-gray-50 transition-colors cursor-pointer"
                >
                   <div className="space-y-1">
                      {item.name && <h3 className="text-[14px] font-bold text-gray-900">{item.name}</h3>}
                      <p className="text-[14px] font-bold text-gray-800">{item.id}</p>
                      <p className="text-[12px] text-gray-400 font-medium">{item.category}</p>
                      <p className="text-[12px] text-gray-400 font-medium">{item.date}</p>
                   </div>
                   <div className={`px-4 py-2 rounded-lg text-[12px] font-bold min-w-[70px] text-center
                      ${item.status === 'New' ? 'bg-[#00008F] text-white' : 
                         item.status === 'Submit' ? 'bg-[#00A32D] text-white' : 
                         'bg-[#F04438]/80 text-white'}`}
                   >
                      {item.status}
                   </div>
                </div>
             ))}
          </div>
        </div>
      </div>

      <button 
        onClick={() => router.push("/dashboard/cases")}
        className="fixed bottom-8 right-8 w-14 h-14 bg-[#1F366A] rounded-full shadow-2xl flex items-center justify-center text-white active:scale-90 transition-transform z-30"
      >
        <Plus className="w-8 h-8 stroke-[3]" />
      </button>

      <AnimatePresence>
        {isFilterOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsFilterOpen(false)}
              className="fixed inset-0 bg-black/40 z-[100] backdrop-blur-[1px]"
            />
            <motion.div 
              initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed bottom-0 inset-x-0 bg-white rounded-t-[40px] z-[101] p-8 pb-10 shadow-2xl max-w-[440px] mx-auto"
            >
               <div className="flex items-center justify-center mb-6">
                  <div className="w-12 h-1.5 bg-gray-200 rounded-full" />
               </div>
               <div className="space-y-8">
                  <div>
                    <h3 className="text-sm font-black text-gray-900 mb-4 uppercase">Status</h3>
                    <div className="space-y-4">
                      {["New", "Submit"].map(s => (
                        <div key={s} onClick={() => setTempFilters(p => ({...p, status: p.status.includes(s) ? p.status.filter(x => x!==s) : [...p.status, s]}))} className="flex justify-between items-center cursor-pointer">
                          <span className="text-[15px] font-bold text-gray-700">{s}</span>
                          <div className={`w-6 h-6 border-2 rounded ${tempFilters.status.includes(s) ? 'bg-blue-600 border-blue-600' : 'border-gray-300'}`}>
                            {tempFilters.status.includes(s) && <Check className="w-4 h-4 text-white" />}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-gray-900 mb-4 uppercase">Kategori</h3>
                    <div className="space-y-4">
                      {["POS", "CLAIM"].map(c => (
                        <div key={c} onClick={() => setTempFilters(p => ({...p, category: p.category.includes(c) ? p.category.filter(x => x!==c) : [...p.category, c]}))} className="flex justify-between items-center cursor-pointer">
                          <span className="text-[15px] font-bold text-gray-700">{c}</span>
                          <div className={`w-6 h-6 border-2 rounded ${tempFilters.category.includes(c) ? 'bg-blue-600 border-blue-600' : 'border-gray-300'}`}>
                            {tempFilters.category.includes(c) && <Check className="w-4 h-4 text-white" />}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-gray-900 mb-4 uppercase">Urutkan</h3>
                    <div className="space-y-4">
                      {["Nama A-Z", "Nama Z-A", "Tanggal Terbaru", "Tanggal Terlama"].map(o => (
                        <div key={o} onClick={() => setTempFilters(p => ({...p, sort: o}))} className="flex justify-between items-center cursor-pointer">
                          <span className="text-[15px] font-bold text-gray-700">{o}</span>
                          <div className={`w-6 h-6 border-2 rounded-full ${tempFilters.sort === o ? 'border-blue-600 bg-blue-600' : 'border-gray-300'}`} />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-3">
                    <button onClick={() => { setAppliedFilters(tempFilters); setIsFilterOpen(false); }} className="w-full bg-[#00008F] text-white py-4 rounded-2xl font-bold">Tampilkan hasil</button>
                    <button onClick={() => { setTempFilters({status:[], category:[], sort:"Nama A-Z"}); setAppliedFilters({status:[], category:[], sort:"Nama A-Z"}); setIsFilterOpen(false); }} className="w-full border-2 border-gray-200 text-[#00008F] py-4 rounded-2xl font-bold">Reset</button>
                  </div>
               </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
