"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [name, setName] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (!name.trim()) return;
    router.push(`/datafetch?name=${name.toLowerCase()}`);
  };

  return (
    <>
    <div className="">
       <h1 className=" text-center text-3xl rounded-2xl border-2  bg-gradient-to-r from-red-600 via-blue-900 to-black text-blak italic font-bold">First Project Gender Prediction using NextJs</h1>
    </div>
   
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-500 via-black to-gray-600 text-white px-4">
      <div className="backdrop-blur-2xl bg-white/10 border border-white/30 p-8 rounded-3xl shadow-lg w-[450px] flex flex-col items-center gap-5">
        <h1 className="text-2xl font-semibold tracking-wide">Gender Predictor</h1>
        <input
          type="text"
          placeholder="Enter Your Name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 rounded-xl bg-white/20 border border-white/30 focus:outline-none placeholder-white/80 text-white"
        />
        <button
          onClick={handleSearch}
          className="w-full py-2 rounded-xl bg-white/30 border border-white/40 hover:bg-white/40 transition text-white font-medium"
        >
          Predict Gender
        </button>
      </div>
    </div>
    </>
  );
}
