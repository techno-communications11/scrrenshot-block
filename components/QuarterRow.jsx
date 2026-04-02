import { QuarterCard } from "./QuarterCard";
import { MonthCard } from "./MonthCard";

export const QuarterRow = ({ quarter }) => {
  return (
    <div className="space-y-2"> {/* reduced from 4 */}

      <div
        className="
        grid 
        grid-cols-1 
        lg:grid-cols-[260px_1fr]  /* smaller quarter width */
        gap-2                     /* reduced from 4 */
        items-start               /* prevents stretching */
      "
      >
        {/* Quarter Card */}
        <div className="w-full">
          <QuarterCard
            quarter={quarter.quarter}
            data={quarter.data}
          />
        </div>

        {/* Months Grid */}
        <div
          className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          xl:grid-cols-3 
          gap-1   /* tighter spacing */
        "
        >
          {quarter.months.map((m) => (
            <MonthCard
              key={`${quarter.quarter}-${m.monthLabel}`}
              month={m.monthLabel}
              best={m.best}
            />
          ))}
        </div>
      </div>
    </div>
  );
};