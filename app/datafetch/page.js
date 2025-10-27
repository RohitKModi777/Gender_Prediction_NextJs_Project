"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { User, TrendingUp, Star, ArrowLeft } from "lucide-react";

export default function DatafetchServer() {
  const [userinfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const router = useRouter();
  const userName = searchParams.get("name");

  useEffect(() => {
    if (!userName) return;
    const fetchData = async () => {
      setLoading(true);
      const res = await fetch(`https://api.genderize.io/?name=${userName}`);
      const data = await res.json();
      setUserInfo(data);
      setLoading(false);
    };
    fetchData();
  }, [userName]);

  if (!userName) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 via-blue-500 to-red-500 text-white text-lg">
        No name provided
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 via-black to-red-500 text-white text-lg">
        Loading...
      </div>
    );
  }

  const confidencePercentage = (userinfo?.probability || 0) * 100;
  let confidenceColor =
    confidencePercentage >= 80
      ? "bg-green-400"
      : confidencePercentage >= 50
      ? "bg-yellow-400"
      : "bg-red-400";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-black to-pink-500 px-4 relative">

      {/* Back button */}
      <button
        onClick={() => router.push("/")}
        className="absolute top-5 left-5 backdrop-blur-md bg-black border border-white/20 text-white px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-gray-700 transition "
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </button>

      <div className="backdrop-blur-2xl bg-white/15 border border-white/20 p-8 rounded-3xl shadow-[0_8px_32px_rgba(255,255,255,0.15)] w-[350px] text-white flex flex-col items-center gap-7 hover:scale-[1.02] transition-all duration-300 ">

        <div className="bg-white/30 rounded-full p-5 shadow-inner">
          <User className="h-10 w-10" />
        </div>

        <h2 className="text-2xl font-semibold capitalize tracking-wide">
          {userinfo?.name}
        </h2>

        <div className="flex flex-col gap-3 w-full">

          <div className="flex justify-between items-center bg-white/15 rounded-xl px-4 py-3">
            <span className="text-sm font-medium ">Gender</span>
            <span className="text-sm font-semibold uppercase">{userinfo?.gender}</span>
          </div>

          <div className="flex justify-between items-center bg-white/15 rounded-xl px-4 py-3">
            <span className="text-sm font-medium">Accuracy</span>
            <span className="text-sm font-semibold">{confidencePercentage.toFixed(0)}%</span>
          </div>

          <div className="flex justify-between items-center bg-white/15 rounded-xl px-4 py-3">
            <span className="text-sm font-medium">Probability</span>
            <span className="text-sm font-semibold">{userinfo?.probability}</span>
          </div>

          <div className="flex justify-between items-center bg-white/15 rounded-xl px-4 py-3">
            <span className="text-sm font-medium">Count</span>
            <span className="text-sm font-semibold">{userinfo?.count}</span>
          </div>

        </div>
      </div>
    </div>
  );
}
