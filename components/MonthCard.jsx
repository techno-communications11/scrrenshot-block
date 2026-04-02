import Image from "next/image";

export const MonthCard = ({ month, best }) => {
  const percent = Number(best.percent) || 92;

  const radius = 25;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - percent / 100);

  return (
    <div className="relative flex items-start justify-between rounded-xl bg-white border border-slate-200 px-2 py-7 shadow-md hover:shadow-xl transition-all duration-300 ">
      {/* Month Badge */}
      <div className="absolute top-3 right-3 text-xs font-bold px-2 py-1 rounded-full bg-amber-100 text-amber-700">
        {month}
      </div>

      {/* LEFT SIDE */}
      <div className=" items-center gap-4">
        <div className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-white shadow-md">
          <Image
            src={best.image}
            alt={best.name}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h3 className="text-base font-semibold text-gray-900">{best.name}</h3>
        </div>
      </div>

      {/* RIGHT SIDE (Circular Progress) */}
      <div className="relative h-20 w-20 self-end">
        <svg viewBox="0 0 100 100" className="h-full w-full">
          {/* Background */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="#e5e7eb"
            strokeWidth="8"
            fill="none"
          />

          {/* Progress */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="url(#gradMonth)"
            strokeWidth="8"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            transform="rotate(-90 50 50)"
            className="transition-all duration-700"
          />

          <defs>
            <linearGradient id="gradMonth">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#fb923c" />
            </linearGradient>
          </defs>
        </svg>

        {/* Center Text */}
        <div className="absolute inset-0 flex items-center justify-center text-sm font-bold text-gray-900">
          {percent}%
        </div>
      </div>
    </div>
  );
};
