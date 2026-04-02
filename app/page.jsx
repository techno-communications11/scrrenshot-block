import { YearCard } from "../components/YearCard";
import { QuarterRow } from "../components/QuarterRow";
import { yearBest, quarters } from "./data/dashboardData";

export default function HomePage() {
  return (
    <div className="relative flex min-h-screen text-slate-100">
        <div className="mx-auto  space-y-10">
          <div className="flex items-center justify-between">
            <div className="mt-7">
              <h1 className="text-3xl font-bold text-slate-500 md:text-4xl">
                Wall of Fame
              </h1>
            </div>
            
          </div>

          <div className="grid grid-cols-1 gap-2 md:grid-cols-[280px_1fr]">
            <section id="year">
              <YearCard data={yearBest} isWinner />
            </section>
            <section id="quarters" className="space-y-2">
              {quarters.map((q) => (
                <QuarterRow key={q.quarter} quarter={q} />
              ))}
            </section>
          </div>
        </div>
    </div>
  );
}
