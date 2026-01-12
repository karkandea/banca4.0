"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, Plus, Calendar, CheckCircle2, ChevronDown, UnfoldVertical } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { caseData } from "@/lib/caseStore";
import { motion, AnimatePresence } from "framer-motion";

export default function UploadDokumenPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const docIndex = parseInt(searchParams.get("index") || "0");
  const doc = caseData.documents[docIndex];

  const [date, setDate] = useState(doc?.date || "");
  const [fileSelected, setFileSelected] = useState(doc?.status === "uploaded");
  const [showPermission, setShowPermission] = useState(false);
  const [showFilePicker, setShowFilePicker] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState("");

  const handleUploadClick = () => {
    if (fileSelected) return;
    setShowPermission(true);
  };

  const handleAllow = () => {
    setShowPermission(false);
    setShowFilePicker(true);
  };

  const handleDeny = () => {
    setShowPermission(false);
    setToastMsg("Izin akses file ditolak");
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleFilePick = () => {
    setShowFilePicker(false);
    setFileSelected(true);
  };

  const handleFinalUpload = () => {
    if (fileSelected && date) {
      caseData.documents[docIndex].status = "uploaded";
      caseData.documents[docIndex].date = date;
      router.push("/dashboard/cases");
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#F8F9FA] pb-[100px] flex flex-col max-w-[440px] mx-auto shadow-2xl relative overflow-hidden">
      <div className="bg-[#2F3C9E] text-white pt-[50px] pb-5 px-6 flex items-center gap-4 sticky top-0 z-20">
        <button onClick={() => router.back()} className="p-1">
          <ChevronLeft className="w-7 h-7" />
        </button>
        <h1 className="text-xl font-bold flex-1 text-center pr-8">Upload Dokumen</h1>
      </div>

      <div className="px-5 mt-6 flex-1 flex flex-col gap-8">
        <div className="bg-white rounded-[24px] p-8 shadow-sm border border-gray-100 flex flex-col gap-6">
           <div className="space-y-2">
              <label className="text-[14px] font-bold text-[#1F366A]">Tanggal Tanda Tangan Nasabah</label>
              <div className="relative">
                 <input 
                    type="date"
                    className="w-full h-14 bg-white border-2 border-slate-200 rounded-2xl px-4 text-[14px] font-medium outline-none focus:border-blue-500 transition-colors"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                 />
              </div>
           </div>

           <div className="space-y-2">
              <label className="text-[14px] font-bold text-[#1F366A]">{doc?.name}</label>
              {!fileSelected ? (
                <div 
                  onClick={handleUploadClick}
                  className="w-full h-[60px] bg-white border-2 border-dashed border-slate-200 rounded-2xl flex items-center px-5 justify-between cursor-pointer hover:border-blue-300 transition-colors"
                >
                   <span className="text-[12px] text-slate-400 font-medium">Upload file pendukung<br/><span className="text-[10px]">hanya mendukung dokumen pdf</span></span>
                   <Plus className="w-6 h-6 text-blue-600" />
                </div>
              ) : (
                <div className="space-y-3">
                   <div className="flex items-center justify-between p-4 border-2 border-green-100 bg-green-50/30 rounded-2xl">
                      <div className="flex-1 pr-4">
                         <p className="text-[12px] font-bold text-gray-800 line-clamp-1">{doc?.name}.pdf</p>
                         <p className="text-[10px] text-green-600 font-bold mt-0.5">file berhasil diupload</p>
                      </div>
                      <X className="w-5 h-5 text-gray-400 cursor-pointer" onClick={() => setFileSelected(false)} />
                   </div>
                   <div className="bg-red-50 p-4 rounded-2xl flex gap-3 items-start border border-red-100">
                      <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-[12px] font-black shrink-0">!</div>
                      <p className="text-[10px] text-gray-600 leading-normal">Perhatian: File ini akan dihapus apabila tidak disubmit dalam waktu 7 hari.</p>
                   </div>
                </div>
              )}
           </div>
        </div>
      </div>

      <div className="fixed bottom-0 inset-x-0 p-5 bg-white border-t border-gray-100 max-w-[440px] mx-auto z-30">
        <button 
          onClick={handleFinalUpload}
          disabled={!fileSelected || !date}
          className="w-full bg-[#005A9E] disabled:bg-slate-300 text-white py-4 rounded-xl font-bold shadow-lg shadow-blue-900/10 active:scale-95 transition-all"
        >
          {fileSelected ? "Simpan" : "Upload"}
        </button>
      </div>

      {/* Permission Modal */}
      <AnimatePresence>
        {showPermission && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/60 z-[100]" />
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="fixed inset-0 m-auto w-[320px] h-fit bg-white rounded-[32px] p-8 z-[101] shadow-2xl flex flex-col items-center">
               <h2 className="text-center font-bold text-[18px] text-gray-900 mb-4 leading-normal">Izinkan "Perfect Assistant" mengakses file di perangkat Anda?</h2>
               <p className="text-center text-[13px] text-gray-500 mb-8 leading-relaxed">Kami memerlukan izin untuk mengakses file agar kamu bisa mengunggah dokumen pendukung dari perangkat ini. Izin ini hanya digunakan untuk kebutuhan upload.</p>
               <div className="flex flex-col w-full gap-2">
                  <button onClick={handleAllow} className="w-full py-4 text-blue-600 font-bold border-t border-gray-100">Izinkan</button>
                  <button onClick={handleDeny} className="w-full py-4 text-blue-600 font-bold border-t border-gray-100">Jangan Izinkan</button>
               </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Mock File Picker Overlay */}
      <AnimatePresence>
        {showFilePicker && (
          <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }} className="fixed inset-0 z-[200] bg-[#F1F3F5] flex flex-col max-w-[440px] mx-auto">
             <div className="bg-white p-4 flex items-center gap-4 shadow-sm">
                <button onClick={() => setShowFilePicker(false)}><ChevronLeft className="w-6 h-6" /></button>
                <span className="font-bold">Recent</span>
             </div>
             <div className="p-4 grid grid-cols-1 gap-2 overflow-y-auto">
                {[1,2,3,4].map(i => (
                   <div key={i} onClick={handleFilePick} className="bg-white p-4 rounded-xl flex items-center gap-4 active:bg-gray-100">
                      <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center"><Plus className="w-6 h-6 text-gray-400" /></div>
                      <div className="flex-1">
                         <p className="text-sm font-bold">IMG_20200701_114725.pdf</p>
                         <p className="text-[10px] text-gray-400">Jul 1 • 117 KB</p>
                      </div>
                   </div>
                ))}
             </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 50, opacity: 0 }} className="fixed bottom-24 left-1/2 -translate-x-1/2 bg-gray-800 text-white px-6 py-3 rounded-full text-sm z-[300] shadow-xl">
             {toastMsg}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
