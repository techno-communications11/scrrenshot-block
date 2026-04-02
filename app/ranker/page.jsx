"use client";

import Image from "next/image";

export default function RankerPage() {
  const people = [
    {
      name: "Ava Medina",
      rank: 1,
      categories: "Sales, Customer Service",
      image: "data:image/jpeg;base64,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",
    },
    {
      name: "John Carter",
      rank: 2,
      categories: "Operations",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    },
    {
      name: "Sophia Lee",
      rank: 3,
      categories: "Finance",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    },
    {
      name: "Daniel Kim",
      rank: 4,
      categories: "HR",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    },
  ];

  const top3 = people.slice(0, 3);
  const others = people.slice(3);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 p-6 text-white">
      <div className="max-w-6xl mx-auto space-y-8">

        {/* HEADER */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Ranker Dashboard</h1>

          <button className="px-5 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-500 text-sm font-medium hover:scale-105 transition">
            Recalculate
          </button>
        </div>

        {/* TOP 3 PODIUM */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">

          {top3.map((p, i) => {
            const isFirst = p.rank === 1;

            return (
              <div
                key={p.rank}
                className={`relative flex flex-col items-center rounded-2xl p-5 ${
                  isFirst
                    ? "bg-gradient-to-br from-yellow-400/20 to-amber-500/20 border border-yellow-400/40 scale-105"
                    : "bg-white/10 border border-white/10"
                }`}
              >
                {/* Crown for #1 */}
                {isFirst && (
                  <div className="absolute -top-4 text-2xl">👑</div>
                )}

                <div className="relative h-24 w-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <Image src={p.image} alt={p.name} fill className="object-cover" />
                </div>

                <h3 className="mt-3 font-semibold">{p.name}</h3>

                <p className="text-xs text-slate-300">{p.categories}</p>

                <div
                  className={`mt-3 text-lg font-bold ${
                    isFirst ? "text-yellow-300" : "text-indigo-300"
                  }`}
                >
                  #{p.rank}
                </div>
              </div>
            );
          })}
        </div>

        {/* OTHER RANKERS */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-3">
          <h2 className="text-sm text-slate-400 uppercase tracking-wider">
            Other Rankings
          </h2>

          {others.map((p) => (
            <div
              key={p.rank}
              className="flex items-center justify-between bg-white/5 rounded-xl px-4 py-3 hover:bg-white/10 transition"
            >
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 rounded-full overflow-hidden">
                  <Image src={p.image} alt={p.name} fill className="object-cover" />
                </div>

                <div>
                  <p className="text-sm font-medium">{p.name}</p>
                  <p className="text-xs text-slate-400">{p.categories}</p>
                </div>
              </div>

              <div className="text-indigo-300 font-semibold">
                #{p.rank}
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}