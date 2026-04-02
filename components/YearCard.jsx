import Image from "next/image";

export const YearCard = ({ data }) => {
  const percent = Number(data.weightage) || 95;

  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - percent / 100);

  return (
    <div
      className="
      relative 
      w-full max-w-xs sm:max-w-sm md:max-w-md
      mx-auto
      rounded-3xl 
      bg-white 
      border border-slate-200 
      p-4 sm:p-5 md:p-6 
      shadow-lg hover:shadow-2xl 
      transition-all duration-300 
      flex flex-col items-center gap-4 sm:gap-5 
      overflow-hidden
    "
    >
      {/* Background Glow */}
      <div className="absolute -top-12 -left-12 sm:-top-16 sm:-left-16 h-40 w-40 sm:h-56 sm:w-56 bg-indigo-200/30 blur-3xl rounded-full" />
      <div className="absolute -bottom-12 -right-12 sm:-bottom-16 sm:-right-16 h-40 w-40 sm:h-56 sm:w-56 bg-blue-200/30 blur-3xl rounded-full" />

      {/* Year Badge */}
      <div className="absolute top-3 right-3 text-[9px] sm:text-[10px] font-semibold px-2 sm:px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 tracking-wide">
        2025 {data.title}
      </div>

      {/* Profile Section */}
      <div className="relative flex flex-col items-center mt-2">
        
        {/* Glow Ring */}
        <div className="absolute h-24 w-24 sm:h-32 sm:w-32 rounded-full bg-indigo-400/20 blur-2xl"></div>

        {/* Image */}
        <div
          className="
          relative 
          h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 
          rounded-full overflow-hidden 
          border-[4px] sm:border-[5px] 
          border-white shadow-xl
        "
        >
          <Image
            src={data.image}
            alt={data.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Trophy */}
        <div className="absolute -bottom-1 sm:-bottom-2 right-0 text-xl sm:text-2xl md:text-3xl">
          🏆
        </div>
      </div>

      {/* Name */}
      <div className="text-center leading-tight">
        <h2 className="text-sm sm:text-base md:text-lg font-bold text-gray-900">
          {data.name}
        </h2>
        <p className="text-[10px] sm:text-xs text-gray-500 mt-1">
          {data.market}
        </p>
      </div>

      {/* Circular Score */}
      <div
        className="
        relative 
        h-28 w-28 sm:h-32 sm:w-32 md:h-40 md:w-40 
        flex items-center justify-center
      "
      >
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
            stroke="url(#gradYear)"
            strokeWidth="8"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            transform="rotate(-90 50 50)"
            className="transition-all duration-700 ease-out"
          />

          <defs>
            <linearGradient id="gradYear">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>

        {/* Text */}
        <div className="absolute flex flex-col items-center">
          <span className="text-sm sm:text-lg md:text-xl font-bold text-gray-900">
            {percent}%
          </span>
          <span className="text-[8px] sm:text-[10px] text-gray-400 tracking-wider uppercase">
            Score
          </span>
        </div>
      </div>
    </div>
  );
};