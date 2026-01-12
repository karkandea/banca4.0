"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, Search, UnfoldVertical, MapPin, Calendar, Clock, Bookmark, ChevronRight, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { caseData, resetCaseData } from "@/lib/caseStore";
import { motion, AnimatePresence } from "framer-motion";

export default function CasesPage() {
  const router = useRouter();
  const [polisSearch, setPolisSearch] = useState(caseData.polis);
  const [showPolisDropdown, setShowPolisDropdown] = useState(false);
  const [showKatDropdown, setShowKatDropdown] = useState(false);
  const [showSubKatDropdown, setShowSubKatDropdown] = useState(false);
  const [note, setNote] = useState(caseData.catatan);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Sync state with caseData
  const [kategori, setKategori] = useState(caseData.kategori);
  const [subKat, setSubKat] = useState(caseData.subKategori);

  const polisList = ["Liam - 123 456 789", "Oliver Thompson - 123 456 789", "Sophia Martinez - 987 654 321"];
  const subKatList = ["Non-Finance", "Finance", "Cancel wait NCR", "Pinjaman Polis", "Redemption / Surrender / Cooling off"];

  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccessModal(true);
    }, 1500);
  };

  const handleFinish = () => {
    resetCaseData();
    router.push("/dashboard/transaksi");
  };

  return (
    <div className="w-full min-h-screen bg-[#F8F9FA] pb-[120px] flex flex-col max-w-[440px] mx-auto shadow-2xl relative">
      {/* Header */}
      <div className="bg-[#2F3C9E] text-white pt-[50px] pb-5 px-6 flex items-center gap-4 sticky top-0 z-20">
        <button onClick={() => router.push("/dashboard/transaksi")} className="p-1">
          <ChevronLeft className="w-7 h-7" />
        </button>
        <h1 className="text-xl font-bold flex-1 text-center pr-8">Cases</h1>
      </div>

      <div className="px-5 mt-6 flex-1 space-y-6">
        <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100 flex flex-col gap-6">
          
          {/* Polis Customer */}
          <div className="space-y-2 relative">
             <label className="text-[14px] font-bold text-[#1F366A]">Polis Customer</label>
             <div className="relative" onClick={() => setShowPolisDropdown(!showPolisDropdown)}>
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                   <Search className="w-4 h-4 text-gray-400" />
                </div>
                <input 
                   className="w-full h-14 bg-white border-2 border-slate-200 rounded-2xl pl-12 pr-10 text-[14px] font-bold text-gray-800 outline-none focus:border-blue-500 transition-colors"
                   placeholder="Cari polis customer"
                   value={polisSearch}
                   onChange={(e) => { setPolisSearch(e.target.value); caseData.polis = e.target.value; }}
                />
                <div className="absolute inset-y-0 right-4 flex items-center">
                   <UnfoldVertical className="w-4 h-4 text-slate-400" />
                </div>
             </div>
             {showPolisDropdown && (
               <div className="absolute top-[90px] inset-x-0 z-30 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 scrollbar-hide max-h-[200px] overflow-y-auto">
                  {polisList.map((p, i) => (
                    <div key={i} className="px-5 py-3 hover:bg-gray-50 cursor-pointer text-sm font-bold text-gray-700" onClick={() => { setPolisSearch(p); caseData.polis = p; setShowPolisDropdown(false); }}>{p}</div>
                  ))}
               </div>
             )}
          </div>

          {/* Kategori */}
          <div className="space-y-2 relative">
             <label className="text-[14px] font-bold text-[#1F366A]">Kategori</label>
             <div 
               className="w-full h-14 bg-white border-2 border-slate-200 rounded-2xl flex items-center px-4 justify-between cursor-pointer"
               onClick={() => setShowKatDropdown(!showKatDropdown)}
             >
                <span className={`text-[14px] font-bold ${kategori ? 'text-gray-800' : 'text-slate-400'}`}>{kategori || "Pilih kategori"}</span>
                <UnfoldVertical className="w-4 h-4 text-slate-400" />
             </div>
             {showKatDropdown && (
               <div className="absolute top-[90px] inset-x-0 z-30 bg-white rounded-2xl shadow-xl border border-gray-100 py-2">
                  {["POS", "CLAIM"].map((k) => (
                    <div key={k} className="px-5 py-3 hover:bg-gray-50 cursor-pointer text-sm font-bold text-gray-700" onClick={() => { setKategori(k); caseData.kategori = k; setShowKatDropdown(false); }}>{k}</div>
                  ))}
               </div>
             )}
          </div>

          {/* Sub Kategori */}
          <div className="space-y-2 relative">
             <label className="text-[14px] font-bold text-[#1F366A]">Sub Kategori</label>
             <div 
               className="w-full h-14 bg-white border-2 border-slate-200 rounded-2xl flex items-center px-4 justify-between cursor-pointer"
               onClick={() => setShowSubKatDropdown(!showSubKatDropdown)}
             >
                <span className={`text-[14px] font-bold ${subKat ? 'text-gray-800' : 'text-slate-400'}`}>{subKat || "Pilih sub kategori"}</span>
                <UnfoldVertical className="w-4 h-4 text-slate-400" />
             </div>
             {showSubKatDropdown && (
               <div className="absolute top-[90px] inset-x-0 z-30 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 scrollbar-hide max-h-[200px] overflow-y-auto">
                  {subKatList.map((s) => (
                    <div key={s} className="px-5 py-3 hover:bg-gray-50 cursor-pointer text-sm font-bold text-gray-700" onClick={() => { setSubKat(s); caseData.subKategori = s; setShowSubKatDropdown(false); }}>{s}</div>
                  ))}
               </div>
             )}
          </div>

          {/* Tipe Transaksi */}
          <div className="space-y-2">
             <label className="text-[14px] font-bold text-[#1F366A]">Tipe transaksi</label>
             <div 
               className="w-full h-14 bg-white border-2 border-slate-200 rounded-2xl flex items-center px-4 justify-between cursor-pointer"
               onClick={() => router.push("/dashboard/cases/tipe")}
             >
                <span className={`text-[14px] font-bold truncate pr-4 ${caseData.tipeTransaksi ? 'text-gray-800' : 'text-slate-400'}`}>{caseData.tipeTransaksi || "Pilih tipe transaksi"}</span>
                <ChevronRight className="w-5 h-5 text-slate-400" />
             </div>
          </div>

          {/* Upload Dokumen */}
          <div className="space-y-4 pt-2">
             <h3 className="text-[14px] font-bold text-[#1F366A]">Upload Dokumen Pendukung</h3>
             <div className="space-y-3">
                {caseData.documents.map((doc, idx) => (
                   <div 
                     key={idx} 
                     onClick={() => router.push(`/dashboard/cases/upload?index=${idx}`)}
                     className="bg-white border-2 border-slate-100 rounded-2xl p-4 flex items-center justify-between cursor-pointer active:bg-gray-50 transition-colors"
                   >
                      <div className="flex-1 pr-4">
                         <p className={`text-[12px] font-bold leading-snug ${doc.status === 'uploaded' ? 'text-gray-800' : 'text-gray-700'}`}>{doc.name}{doc.status === 'uploaded' ? '.pdf' : ''}</p>
                         {doc.status === 'uploaded' ? (
                           <p className="text-[10px] text-green-600 font-bold mt-1">file berhasil diupload</p>
                         ) : (
                           <p className="text-[10px] text-gray-400 mt-1">file max 2mb</p>
                         )}
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-300" />
                   </div>
                ))}
             </div>

             <div className="bg-red-50 p-4 rounded-2xl flex gap-3 items-start border border-red-100">
                <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-[12px] font-black shrink-0">!</div>
                <p className="text-[10px] text-gray-600 leading-normal">Perhatian: File ini akan dihapus apabila tidak disubmit dalam waktu 7 hari.</p>
             </div>
          </div>

          {/* Catatan */}
          <div className="space-y-2 relative pb-4">
             <label className="text-[14px] font-bold text-[#1F366A]">Catatan</label>
             <textarea 
                className="w-full h-32 bg-white border-2 border-slate-200 rounded-2xl p-4 text-[14px] font-medium outline-none focus:border-blue-500 transition-colors resize-none placeholder-slate-300"
                placeholder="Masukkan catatan"
                maxLength={100}
                value={note}
                onChange={(e) => { setNote(e.target.value); caseData.catatan = e.target.value; }}
             />
             <div className="absolute bottom-0 right-0 text-[10px] font-bold text-slate-400">
                {note.length}/100
             </div>
          </div>

        </div>
      </div>

      <div className="fixed bottom-0 inset-x-0 p-5 bg-white border-t border-gray-100 flex gap-4 max-w-[440px] mx-auto z-40">
        <button className="flex-1 border-2 border-[#00008F] text-[#00008F] py-4 rounded-xl font-bold active:scale-95 transition-all">Save draft</button>
        <button 
           disabled={isSubmitting}
           onClick={handleSubmit}
           className="flex-1 bg-[#005A9E] text-white py-4 rounded-xl font-bold active:scale-95 transition-all shadow-lg shadow-blue-900/10 flex justify-center items-center"
        >
          {isSubmitting ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> : "Submit"}
        </button>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/60 z-[100] backdrop-blur-sm" />
            <motion.div initial={{ scale: 0.9, opacity: 0, y: 50 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 50 }} className="fixed inset-0 m-auto w-[360px] h-fit bg-white rounded-[40px] p-10 z-[101] flex flex-col items-center">
               <div className="w-full mb-6">
                  <img src="/assets/suskespos.jpg" className="w-full h-auto object-contain rounded-2xl" alt="Success" />
               </div>
               <h2 className="text-[#1F366A] font-bold text-xl mb-8">Sukses mengirimkan file</h2>
               <button 
                 onClick={handleFinish}
                 className="w-full bg-[#F1F3F5] text-gray-600 py-4 rounded-2xl font-bold active:scale-95 transition-all"
               >
                 Kembali
               </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
