export default function DashboardPage() {
  return (
    <main className="min-h-screen px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-3xl font-bold text-slate-900">Student dashboard</h1>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="card p-6">
            <p className="text-sm text-slate-500">Profile completeness</p>
            <p className="mt-3 text-3xl font-bold text-blue-600">82%</p>
          </div>
          <div className="card p-6">
            <p className="text-sm text-slate-500">Top match</p>
            <p className="mt-3 text-3xl font-bold text-green-600">Computer Science</p>
          </div>
          <div className="card p-6">
            <p className="text-sm text-slate-500">Counselor status</p>
            <p className="mt-3 text-3xl font-bold text-violet-600">Linked</p>
          </div>
        </div>
      </div>
    </main>
  );
}
