"use client";
import React, { useState } from "react";
import { X, User, Lock, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function LoginOverlay({ onClose, onSuccess }: { onClose: () => void; onSuccess: (path: string) => void }) {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Mimic API delay
    await new Promise(resolve => setTimeout(resolve, 600));

    if (username === "LP" && password === "LP") {
      onSuccess("/dashboard");
    } else if (username === "SL" && password === "SL") {
      onSuccess("/dashboard/sl");
    } else {
      setLoading(false);
      setError("Invalid username or password");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={onClose} />
      
      {/* Card */}
      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="relative w-full max-w-[340px] bg-white rounded-[12px] shadow-2xl overflow-hidden flex flex-col"
      >
        {/* Header */}
        <div className="bg-[#EBEBF5] h-[60px] flex items-center justify-center relative">
          <h2 className="text-[#3C3C43] text-[18px] font-normal tracking-wide">Perfect Assistant</h2>
          <button 
            onClick={onClose}
            className="absolute right-4 text-[#00008F]"
          >
            <X className="w-6 h-6" strokeWidth={2.5} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col">
           <div className="px-6 py-8 flex flex-col gap-4">
               {/* Username Input */}
               <div className={`flex w-full border ${error ? 'border-red-500' : 'border-gray-200'} rounded-[4px] overflow-hidden transiton-colors`}>
                  <div className="w-[50px] bg-[#F2F2F7] flex items-center justify-center text-[#8E8E93]">
                      <User className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <input 
                    type="text"
                    required
                    placeholder="username/email"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="flex-1 h-[50px] px-4 text-[14px] text-gray-700 placeholder-gray-400 outline-none"
                  />
               </div>

               {/* Password Input */}
               <div className={`flex w-full border ${error ? 'border-red-500' : 'border-gray-200'} rounded-[4px] overflow-hidden transiton-colors`}>
                  <div className="w-[50px] bg-[#F2F2F7] flex items-center justify-center text-[#8E8E93]">
                      <Lock className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <input 
                    type="password"
                    required
                    placeholder="your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="flex-1 h-[50px] px-4 text-[14px] text-gray-700 placeholder-gray-400 outline-none"
                  />
               </div>

               {/* Error Message */}
               {error && (
                 <div className="text-red-500 text-[12px] text-center font-medium">
                   {error}
                 </div>
               )}

               {/* Forgot Password */}
               <div className="text-center mt-2">
                 <button type="button" className="text-[#3C3C43] text-[13px] hover:underline">
                   Don't remember your password?
                 </button>
               </div>
           </div>

           {/* Submit Button */}
           <button 
              type="submit"
              disabled={loading}
              className="w-full h-[60px] bg-[#00008F] text-white flex items-center justify-center gap-2 text-[14px] font-medium tracking-widest uppercase hover:bg-[#000070] active:scale-[0.99] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
           >
              {loading ? (
                  <span>LOGGING IN...</span>
              ) : (
                  <>
                    <span>LOG IN</span>
                    <ChevronRight className="w-4 h-4" />
                  </>
              )}
           </button>
        </form>
      </motion.div>
    </div>
  );
}
