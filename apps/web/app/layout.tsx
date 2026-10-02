import "./globals.css";

export const metadata = {
  title: "Department Selection Guide",
  description: "AI-powered department advisory system for Ethiopian university students.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
