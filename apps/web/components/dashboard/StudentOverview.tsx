export function StudentOverview() {
  return (
    <div className="card p-6">
      <h3 className="text-xl font-semibold text-slate-900">Student Overview</h3>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div>
          <p className="text-sm text-slate-500">Stream</p>
          <p className="text-lg font-semibold">Natural Science</p>
        </div>
        <div>
          <p className="text-sm text-slate-500">School</p>
          <p className="text-lg font-semibold">Adama Preparatory</p>
        </div>
      </div>
    </div>
  );
}
