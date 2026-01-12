"use client";

// Simple global-ish state for the prototype flow
export const caseData = {
  polis: "",
  kategori: "",
  subKategori: "",
  tipeTransaksi: "",
  catatan: "",
  documents: [
    { name: "Formulir Pengajuan Penarikan Dana dan Pembatalan Polis", status: "pending", date: "" },
    { name: "Copy KTP (WNI) / Copy Paspor dan KITAS (WNA)", status: "pending", date: "" },
    { name: "Foto Diri Memegang Kartu Identitas dan Formulir Pengajuan", status: "pending", date: "" },
  ]
};

export const resetCaseData = () => {
  caseData.polis = "";
  caseData.kategori = "";
  caseData.subKategori = "";
  caseData.tipeTransaksi = "";
  caseData.catatan = "";
  caseData.documents.forEach(doc => {
    doc.status = "pending";
    doc.date = "";
  });
};
