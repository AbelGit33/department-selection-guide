export function RecommendationList() {
  const cards = [
    ["Computer Science", 92],
    ["Software Engineering", 89],
    ["Civil Engineering", 85],
  ];

  return (
    <div className="space-y-4">
      {cards.map(([name, score]) => (
        <div key={name} className="card p-5">
          <div className="flex items-center justify-between">
            <h4 className="text-lg font-semibold text-slate-900">{name}</h4>
            <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-bold text-blue-700">{score}%</span>
          </div>
        </div>
      ))}
    </div>
  );
}
