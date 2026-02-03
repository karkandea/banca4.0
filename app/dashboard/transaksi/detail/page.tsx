"use client";
import React from "react";
import { ChevronLeft, User, FileText, Plus, X, SquarePen } from "lucide-react";
import { useRouter } from "next/navigation";

export default function DetailTransaksiPage() {
  const router = useRouter();

  const polisInfo = [
    { label: "Nama Nasabah", value: "Dewi Lestari" },
    { label: "No Polis", value: "520-7021386" },
    { label: "Nama Produk", value: "Mandiri Flexi Proteksi Plan 10" },
  ];

  const transaksiInfo = [
    { label: "Kategori", value: "POS" },
    { label: "Sub Kategori", value: "Finance" },
    { label: "Tipe Transaksi", value: "Cuti Premi" },
  ];

  return (
    <div className="w-full min-h-screen bg-[#F8F9FA] pb-[100px] flex flex-col">
      {/* Header */}
      <div className="bg-[#2F3C9E] text-white pt-[50px] pb-5 px-6 flex items-center gap-4 sticky top-0 z-20">
        <button onClick={() => router.back()} className="p-1">
          <ChevronLeft className="w-7 h-7" />
        </button>
        <h1 className="text-xl font-bold flex-1 text-center pr-8">Detail Transaksi</h1>
      </div>

      <div className="px-5 py-6 space-y-5">
        {/* Detail Polis Card */}
        <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100 space-y-6">
           <div className="flex justify-between items-start">
             <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#2F3C9E]/10 flex items-center justify-center">
                   <User className="w-4 h-4 text-[#2F3C9E]" />
                </div>
                <h2 className="text-[#2F3C9E] font-bold text-lg">Detail Polis</h2>
             </div>
             <span className="bg-[#F1F3F5] text-blue-500 px-3 py-1 rounded-full text-[12px] font-bold">Draft</span>
           </div>

           <div className="space-y-4">
              {polisInfo.map((info, i) => (
                 <div key={i} className="space-y-1">
                    <p className="text-[12px] text-gray-400 font-medium">{info.label}</p>
                    <p className="text-[14px] text-gray-800 font-bold">{info.value}</p>
                 </div>
              ))}
              
              <div className="flex justify-between items-center py-1">
                 <p className="text-[12px] text-[#1F366A] font-bold uppercase tracking-tight">APE (Annual Preimum Equivalent)</p>
                 <p className="text-[14px] text-gray-800 font-black">Rp 12.000.000</p>
              </div>

              <div className="flex justify-between items-center py-1">
                 <p className="text-[12px] text-gray-400 font-medium">Mode Pembayaran</p>
                 <p className="text-[14px] text-gray-800 font-bold">Bulanan</p>
              </div>
           </div>
        </div>

        {/* Detail Transaksi Card */}
        <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100 space-y-6">
           <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#2F3C9E]/10 flex items-center justify-center">
                 <FileText className="w-4 h-4 text-[#2F3C9E]" />
              </div>
              <h2 className="text-[#2F3C9E] font-bold text-lg">Detail Transaksi</h2>
           </div>

           <div className="space-y-4">
              {transaksiInfo.map((info, i) => (
                 <div key={i} className="space-y-1">
                    <p className="text-[12px] text-gray-400 font-medium">{info.label}</p>
                    <p className="text-[14px] text-gray-800 font-bold">{info.value}</p>
                 </div>
              ))}
              
              <div className="space-y-1">
                 <p className="text-[12px] text-gray-400 font-medium">Catatan</p>
                 <p className="text-[13px] text-gray-600 font-medium leading-relaxed">
                    Catatan transaksi pelanggan dan catatan penjualan yang...
                 </p>
              </div>
           </div>
        </div>

        {/* Dokumen Pendukung Card */}
        <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100 space-y-6">
           <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#2F3C9E]/10 flex items-center justify-center">
                 <FileText className="w-4 h-4 text-[#2F3C9E]" />
              </div>
              <h2 className="text-[#2F3C9E] font-bold text-lg">Dokumen Pendukung</h2>
           </div>

           <div className="space-y-3">
              {/* Doc item 1 */}
              <div className="flex items-center justify-between p-4 border-2 border-slate-100 rounded-2xl">
                 <p className="text-[13px] font-bold text-gray-800 flex-1 pr-4 leading-tight">Formulir Pengajuan Penarikan Dana dan Pembatalan Polis</p>
                 <Plus className="w-5 h-5 text-gray-400" />
              </div>

              {/* Doc item 2 */}
              <div className="flex items-center justify-between p-4 border-2 border-slate-100 rounded-2xl">
                 <p className="text-[13px] font-bold text-gray-800 flex-1 pr-4 leading-tight">Copy KTP (WNI) / Copy Paspor dan KITAS (WNA)</p>
                 <Plus className="w-5 h-5 text-gray-400" />
              </div>

              {/* Doc item 3 (Selected) */}
              <div className="border-2 border-slate-100 rounded-2xl overflow-hidden">
                 <div className="flex items-center justify-between p-4 pb-2">
                    <p className="text-[13px] font-bold text-gray-800 flex-1 pr-4 leading-tight">Foto Diri Memegang Kartu Identitas dan Formulir Pengajuan</p>
                    <X className="w-5 h-5 text-gray-400" />
                 </div>
                 <div className="px-4 pb-4">
                    <div className="bg-[#F8F9FA] rounded-xl p-3 flex items-center gap-3 border border-slate-100">
                       <Plus className="w-4 h-4 text-blue-500" />
                       <span className="text-[12px] text-gray-500 font-medium">Tambahkan file lain</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>

      {/* Sticky Bottom Action */}
      <div className="fixed bottom-0 left-0 right-0 mx-auto max-w-[440px] p-5 bg-white border-t border-gray-100 z-30">
        <button className="w-full bg-[#005A9E] text-white py-4 rounded-[16px] font-bold flex items-center justify-center gap-3 active:scale-[0.98] transition-all shadow-lg shadow-blue-900/10">
          <SquarePen className="w-5 h-5" />
          Tambah / Ganti Dokumen
        </button>
      </div>
    </div>
  );
}
