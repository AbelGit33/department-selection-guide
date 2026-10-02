import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">DSG</p>
            <h1 className="mt-2 text-3xl font-bold text-slate-900">Department Selection Guide</h1>
          </div>
          <nav className="flex gap-4 text-sm font-medium text-slate-700">
            <Link href="/login">Login</Link>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/recommendations">Recommendations</Link>
          </nav>
        </header>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="card p-8">
            <p className="mb-4 inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
              AI advisory for Ethiopian students
            </p>
            <h2 className="text-4xl font-extrabold leading-tight text-slate-900">
              Choose the right department with confidence.
            </h2>
            <p className="mt-4 max-w-xl text-base text-slate-600">
              DSG helps students compare academic strengths, interests, and subject fit to discover the departments that best match their potential.
            </p>
            <div className="mt-8 flex gap-4">
              <Link href="/recommendations" className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-200 hover:bg-blue-700">
                Explore recommendations
              </Link>
              <Link href="/login" className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50">
                Student portal
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { label: "Academic fit", value: "92%" },
              { label: "Interest alignment", value: "88%" },
              { label: "Career guidance", value: "10 departments" },
              { label: "Language support", value: "EN / AM" },
            ].map((item) => (
              <div key={item.label} className="card p-6">
                <p className="text-sm text-slate-500">{item.label}</p>
                <p className="mt-3 text-3xl font-bold text-slate-900">{item.value}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
