import { CriteriaList } from "../../components/CriteriaList";

export default function CriteriaPage() {
  return (
    <main className="min-h-screen px-6 py-10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="mx-auto max-w-5xl space-y-8">

        {/* HEADER */}
        <header className="space-y-3">
          <p className="text-xs uppercase tracking-widest text-indigo-400">
            Criteria Center
          </p>
          <h1 className="text-3xl font-bold">
            Wall of Fame Ranking Rules
          </h1>
          <p className="text-sm text-slate-300">
            Clear rules that define how employees are evaluated and ranked.
          </p>
        </header>

        {/* RULES */}
        <section className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-6 backdrop-blur space-y-4 shadow-lg">
          <h2 className="text-lg font-semibold text-blue-300">
            Evaluation Rules
          </h2>

          <ul className="space-y-2 text-sm text-slate-200">
            <li>• Monthly evaluation based on defined criteria</li>
            <li>• Each criterion has a fixed weight (%)</li>
            <li>• Final score = weighted average</li>
            <li>• Only verified data is considered</li>
            <li>• Manipulated entries are ignored</li>
          </ul>
        </section>

        {/* SCORING */}
        <section className="rounded-2xl border border-indigo-500/20 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 p-6 space-y-4 shadow-lg">
          <h2 className="text-lg font-semibold text-indigo-300">
            Scoring Formula
          </h2>

          <div className="text-sm">
            Final Score =
            <span className="ml-2 text-indigo-200 font-semibold">
              Σ (Score × Weight)
            </span>
          </div>

          <p className="text-xs text-slate-400">
            Weighted contribution ensures fair ranking across all factors.
          </p>
        </section>

        {/* CRITERIA */}
        <section className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 to-green-500/10 p-6 backdrop-blur shadow-lg">
          <h2 className="text-lg font-semibold text-emerald-300 mb-4">
            Active Criteria
          </h2>

          <CriteriaList />
        </section>

        {/* VALIDATION */}
        <section className="rounded-2xl border border-rose-500/20 bg-gradient-to-br from-rose-500/10 to-pink-500/10 p-6 space-y-4 shadow-lg">
          <h2 className="text-lg font-semibold text-rose-300">
            Validation Rules
          </h2>

          <ul className="space-y-2 text-sm text-slate-200">
            <li>• Total weight must equal 100%</li>
            <li>• No criterion above 50%</li>
            <li>• Scores must be 0–100</li>
            <li>• Locked data cannot be edited</li>
            <li>• Only admins can modify criteria</li>
          </ul>
        </section>

      </div>
    </main>
  );
}