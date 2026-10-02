export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="text-lg font-bold text-slate-900">DSG</div>
          <nav className="flex gap-6 text-sm font-medium text-slate-600">
            <a href="/">Home</a>
            <a href="/dashboard">Dashboard</a>
            <a href="/recommendations">Recommendations</a>
            <a href="/login">Login</a>
          </nav>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}
