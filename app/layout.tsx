import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Features - Flow UI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-black antialiased">
        {/* <header className="w-full border-b border-white/6">
          <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link
              href="/features"
              className="font-semibold text-lg tracking-wide"
            >
              Flow UI
            </Link>
            <nav className="flex gap-4">
              <Link
                href="/features/admin"
                className="text-slate-300/80 hover:text-white"
              >
                ADMIN
              </Link>
              <Link
                href="/features/user"
                className="text-slate-300/80 hover:text-white"
              >
                USER
              </Link>
            </nav>
          </div>
        </header> */}

        <main className="max-w-5xl mx-auto px-6 py-12">{children}</main>
      </body>
    </html>
  );
}
