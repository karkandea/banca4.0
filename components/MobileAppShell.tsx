import React from 'react';

export default function MobileAppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full flex justify-center bg-[#E5E5E5] overflow-hidden text-[#323232] font-sans">
      <div className="w-full max-w-[440px] bg-white h-[100dvh] relative shadow-2xl overflow-y-auto overflow-x-hidden scrollbar-hide font-inter">
        {children}
      </div>
    </div>
  );
}
