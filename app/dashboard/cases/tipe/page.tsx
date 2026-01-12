"use client";
import React, { useState } from "react";
import { ChevronLeft, Search, Check } from "lucide-react";
import { useRouter } from "next/navigation";
import { caseData } from "@/lib/caseStore";

const tipes = [
  "Perubahan Alamat (koresponden, Email), Perubahan Telepon(Rumah, Kantor)/Handphone",
  "Perubahan Data Rekening Pendebetan (SKDKR)",
  "Perubahan Jenis Kelamin/DOB Termaslahat",
  "Agama",
  "Duplikat polis / Kartu kesehatan",
  "Ejaan Nama Pemegang Polis,Tertanggung & Termaslahat",
  "ID Pemegang Polis/Tertanggung",
  "Kewarganegaraan",
  "Perubahan Data Kartu Kredit Pendebetan (SKDKK)",
  "Status Perkawinan",
  "Termaslahat",
  "Perubahan Jenis Kelamin/DOB Termaslahat",
  "Perubahan Pekerjaan",
  "Cuti Premi",
  "Pemulihan Polis/Reinstatement",
  "Perubahan Frekuensi Pembayaran",
];

export default function TipeTransaksiPage() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(caseData.tipeTransaksi);

  const filteredTipes = tipes.filter(t => t.toLowerCase().includes(search.toLowerCase()));

  const handleSelect = () => {
    if (selected) {
      caseData.tipeTransaksi = selected;
      router.push("/dashboard/cases");
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#F8F9FA] pb-[100px] flex flex-col max-w-[440px] mx-auto shadow-2xl">
      <div className="bg-[#2F3C9E] text-white pt-[50px] pb-5 px-6 flex items-center gap-4 sticky top-0 z-20">
        <button onClick={() => router.back()} className="p-1">
          <ChevronLeft className="w-7 h-7" />
        </button>
        <h1 className="text-xl font-bold flex-1 text-center pr-8">Tipe Transaksi</h1>
      </div>

      <div className="px-5 mt-6 flex-1 flex flex-col gap-6">
        <div className="relative">
          <div className="absolute inset-y-0 left-4 flex items-center">
            <Search className="w-5 h-5 text-gray-300" />
          </div>
          <input 
             className="w-full h-12 bg-white border border-gray-200 rounded-2xl pl-12 pr-4 text-sm font-medium outline-none"
             placeholder="Cari kategori"
             value={search}
             onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="flex-1 bg-white rounded-t-[32px] -mx-5 px-7 pt-8 space-y-2 overflow-y-auto">
          {filteredTipes.map((tipe, i) => (
            <div 
              key={i} 
              onClick={() => setSelected(tipe)}
              className="flex justify-between items-center py-4 border-b border-gray-50 cursor-pointer active:bg-gray-50"
            >
              <span className={`text-[13px] font-bold flex-1 pr-4 leading-relaxed ${selected === tipe ? 'text-blue-700' : 'text-gray-700'}`}>
                {tipe}
              </span>
              {selected === tipe && <Check className="w-5 h-5 text-blue-600 shrink-0" />}
            </div>
          ))}
        </div>
      </div>

      <div className="fixed bottom-0 inset-x-0 p-5 bg-white border-t border-gray-100 max-w-[440px] mx-auto z-30">
        <button 
          onClick={handleSelect}
          className="w-full bg-[#005A9E] text-white py-4 rounded-xl font-bold shadow-lg shadow-blue-900/10 active:scale-95 transition-all"
        >
          Pilih
        </button>
      </div>
    </div>
  );
}
