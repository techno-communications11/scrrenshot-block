"use client";

import Image from "next/image";

export default function RankerPage() {
  const data = {
    name: "Ava Medina",
    rank: "3rd",
    categories: "Sales, Customer Service",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
  };

  return (
    <main className="min-h-screen  from-slate-50 to-indigo-50 p-4 sm:p-8">

      <div className="max-w-6xl mx-auto space-y-6">

        {/* HEADER */}
        <div className="flex justify-between items-center bg-white rounded-2xl  p-4 ">
          <h1 className="text-lg font-semibold text-gray-800">
            Ranker Overview
          </h1>

          <button className="px-5 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-500 text-white text-sm font-medium  hover:scale-105 transition">
            Start Ranker
          </button>
        </div>

        {/* MAIN CARD */}
        <div className="bg-white rounded-3xl p-6 sm:p-8">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

            {/* LEFT - IMAGE */}
            <div className="relative flex justify-center">
              
              {/* Glow */}
              <div className="absolute h-72 w-72 bg-indigo-200/30 blur-3xl rounded-full"></div>

              <div className="relative h-64 w-64 rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
                <Image
                  src={data.image}
                  alt={data.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* RIGHT - DETAILS */}
            <div className="space-y-6">

              {/* Name */}
              <div className="bg-slate-50 rounded-xl p-4 border border-gray-100">
                <p className="text-xs text-gray-500 uppercase tracking-wider">
                  Name
                </p>
                <p className="text-lg font-semibold text-gray-900 mt-1">
                  {data.name}
                </p>
              </div>

              {/* Rank */}
              <div className="bg-slate-50 rounded-xl p-4 border border-gray-100">
                <p className="text-xs text-gray-500 uppercase tracking-wider">
                  Current Rank
                </p>
                <p className="text-lg font-semibold text-indigo-600 mt-1">
                  #{data.rank}
                </p>
              </div>

              {/* Categories */}
              <div className="bg-slate-50 rounded-xl p-4 border border-gray-100">
                <p className="text-xs text-gray-500 uppercase tracking-wider">
                  Categories
                </p>
                <p className="text-gray-800 mt-1">
                  {data.categories}
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}