export const criteriaItems = [
  {
    label: "Influence",
    value: "Leader in 12 markets",
    detail: "People reached",
  },
  {
    label: "Velocity",
    value: "18 missions",
    detail: "Completed this quarter",
  },
  {
    label: "Integrity",
    value: "99% retention",
    detail: "Client trust score",
  },
  {
    label: "Growth",
    value: "+42%",
    detail: "Revenue lift",
  },
];

export function CriteriaList({ data = criteriaItems }) {
  return (
    <div className="space-y-4">
      {data.map((item) => (
        <article
          key={item.label}
          className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/90 p-4 shadow-sm"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-slate-500">{item.label}</p>
            <h3 className="text-xl font-semibold text-slate-900">{item.value}</h3>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{item.detail}</p>
          </div>
          <div className="rounded-full border border-slate-200 px-3 py-1 text-[11px] uppercase tracking-[0.4em] text-slate-600">
            live
          </div>
        </article>
      ))}
    </div>
  );
}
