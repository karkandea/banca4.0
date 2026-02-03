"use client";
import React, { use } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, User, Calendar, CreditCard, UserSquare2, Info } from "lucide-react";
import { teleUwData } from "../data";

// Since this is a client component in App Router, we unwrap params
export default function TeleUWDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const { id } = use(params);
  
  // Find data item
  const item = teleUwData.find(d => d.id === parseInt(id));

  if (!item) {
    return <div className="text-center mt-20">Data not found</div>;
  }

  return (
    <div className="w-full min-h-screen bg-[#F4F6F9] font-sans pb-10">
      {/* Header */}
      <div className="bg-[#2F3C9E] px-6 pt-12 pb-6 flex items-center gap-4 text-white shadow-md sticky top-0 z-50">
        <button onClick={() => router.back()} className="active:scale-90 transition-transform">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-bold flex-1 text-center pr-6">Profile Detail</h1>
      </div>

      {/* Main Content Card - Floating like in screenshot */}
      <div className="px-4 -mt-2">
         {/* White Card Container */}
         <div className="bg-white rounded-[24px] px-6 py-6 shadow-sm min-h-[80vh] mt-4 space-y-8">
            
            {/* 1. Informasi TeleUW */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                 {/* Custom Icon for Section Header */}
                 <div className="text-[#1F366A] font-bold text-lg flex items-center gap-2">
                   <img src="/Assets/Icons/solar_notes-bold-duotone.svg" className="w-6 h-6 filter invert-[20%] sepia-[60%] saturate-[1800%] hue-rotate-[220deg] brightness-[80%] contrast-[90%]" alt="Info" />
                     Informasi TeleUW
                 </div>
              </div>

              <div className="space-y-4 text-sm">
                 <div className="flex justify-between items-start">
                    <div>
                        <p className="text-[#5F7094] mb-1">Status Call</p>
                        <p className="font-semibold text-gray-800">{item.statusCall}</p>
                    </div>
                    {/* Badge matches screenshot (Close is red) */}
                    <div className={`${item.statusColor} text-[10px] font-bold px-3 py-1 rounded-full`}>
                        {item.statusLabel}
                    </div>
                 </div>

                 <div>
                    <p className="text-[#5F7094] mb-1">Reason Status</p>
                    <p className="font-semibold text-gray-800">{item.reasonStatus}</p>
                 </div>

                 <div>
                    <p className="text-[#5F7094] mb-1">Detail Reason</p>
                    <p className="font-medium text-gray-600 leading-relaxed">
                       {item.detailReason}
                    </p>
                 </div>
              </div>
            </div>

            {/* 2. Jadwal TeleUW */}
            <div>
              <div className="flex items-center gap-2 mb-4 text-[#1F366A] font-bold text-lg">
                 <Calendar className="w-6 h-6 fill-[#1F366A] text-white" /> {/* Approximating the filled calendar icon */}
                 Jadwal TeleUW
              </div>
              
              <div className="space-y-4 text-sm">
                 <div>
                    <p className="text-[#5F7094] mb-1">Tanggal & Jam</p>
                    <p className="font-semibold text-gray-800">{item.scheduleDate}</p>
                 </div>
                 
                 <div>
                    <p className="text-[#5F7094] mb-1">Catatan</p>
                    <p className="font-medium text-gray-600 leading-relaxed">
                       {item.notes}
                    </p>
                 </div>
              </div>
            </div>

            {/* 3. Detail Profil */}
            <div>
              <div className="flex items-center gap-2 mb-4 text-[#1F366A] font-bold text-lg">
                 <User className="w-6 h-6 fill-[#1F366A] text-white" />
                 Detail Profil
              </div>

              <div className="grid gap-4 text-sm">
                 <div>
                    <p className="text-[#5F7094] mb-1">Nama Korporasi</p>
                    <p className="font-medium text-gray-800">{item.corporateName}</p>
                 </div>
                 <div>
                    <p className="text-[#5F7094] mb-1">Nama Lengkap</p>
                    <p className="font-medium text-gray-800">{item.name}</p>
                 </div>
                 <div>
                    <p className="text-[#5F7094] mb-1">Jenis Kelamin</p>
                    <p className="font-medium text-gray-800">{item.gender}</p>
                 </div>
                 <div>
                    <p className="text-[#5F7094] mb-1">Usia</p>
                    <p className="font-medium text-gray-800">{item.age}</p>
                 </div>
                 <div>
                    <p className="text-[#5F7094] mb-1">No Handphone</p>
                    <p className="font-medium text-gray-800">{item.phone}</p>
                 </div>
                 <div>
                    <p className="text-[#5F7094] mb-1">Email</p>
                    <p className="font-medium text-gray-800">{item.email}</p>
                 </div>
                 <div>
                    <p className="text-[#5F7094] mb-1">Alamat Tempat Tinggal</p>
                    <p className="font-medium text-gray-800 leading-relaxed">{item.address}</p>
                 </div>
              </div>
            </div>

            {/* 4. Informasi Polis */}
            <div>
               <div className="flex items-center gap-2 mb-4 text-[#1F366A] font-bold text-lg">
                 <CreditCard className="w-6 h-6 fill-[#1F366A] text-white" />
                 Informasi Polis
              </div>
              
              <div className="space-y-4 text-sm">
                  <p className="font-medium text-gray-600">{item.policyNumber}</p>
                  <p className="font-bold text-gray-800">{item.plan}</p>
              </div>
            </div>

         </div>
      </div>
    </div>
  );
}
