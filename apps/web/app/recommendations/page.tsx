export default function RecommendationsPage() {
  const recommendations = [
    { name: "Computer Science", score: 92, fit: "Academic fit: 95%", reason: "Strong mathematics and ICT performance" },
    { name: "Software Engineering", score: 89, fit: "Academic fit: 91%", reason: "Physics and logic-based aptitude" },
    { name: "Electrical Engineering", score: 86, fit: "Academic fit: 88%", reason: "Strong quantitative problem-solving" },
  ];

  return (
    <main className="min-h-screen px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-3xl font-bold text-slate-900">Department recommendations</h1>
        <div className="mt-8 space-y-4">
          {recommendations.map((item) => (
            <div key={item.name} className="card p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-semibold text-slate-900">{item.name}</h2>
                  <p className="mt-2 text-slate-600">{item.reason}</p>
                </div>
                <div className="rounded-xl bg-blue-50 px-4 py-2 text-center">
                  <p className="text-xs uppercase tracking-wide text-blue-700">Match</p>
                  <p className="text-2xl font-bold text-blue-700">{item.score}%</p>
                </div>
              </div>
              <p className="mt-4 text-sm font-medium text-slate-700">{item.fit}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
