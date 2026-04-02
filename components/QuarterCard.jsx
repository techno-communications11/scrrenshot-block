import Image from "next/image";

export const QuarterCard = ({ quarter, data }) => {
  const percent = Number(data.percent) || 92;

  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - percent / 100);

  return (
    <div className="relative flex items-start justify-between rounded-xl bg-white border border-slate-200 px-5 py-6 shadow-md hover:shadow-xl transition-all duration-300">

      {/* Quarter Badge */}
      <div className="absolute top-2 right-2 text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-700">
        Quator {quarter}
      </div>

      {/* LEFT SIDE */}
      <div className="items-center gap-4">
        <div className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-white shadow-md">
          <Image
            src={data.image}
            alt={data.name}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h3 className="text-base font-semibold text-gray-900">
            {data.name}
          </h3>
          <p className="text-sm text-gray-500">{data.market}</p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="relative h-24 w-24 self-end "> {/* ← KEY FIX */}

        <svg viewBox="0 0 100 100" className="h-full w-full">
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="#e5e7eb"
            strokeWidth="10"
            fill="none"
          />

          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="url(#grad)"
            strokeWidth="10"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            transform="rotate(-90 50 50)"
            className="transition-all duration-700"
          />

          <defs>
            <linearGradient id="grad">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-lg font-bold text-gray-900">
            {percent}%
          </span>
          <span className="text-[10px] text-gray-400 uppercase">
            Overall
          </span>
        </div>
      </div>
    </div>
  );
};