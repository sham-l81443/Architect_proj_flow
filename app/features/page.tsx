import Link from "next/link";

export default function FeaturesPage() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="w-full max-w-3xl rounded-[28px] border border-black/10 bg-white/90 shadow-[0_30px_80px_rgba(0,0,0,0.08)] backdrop-blur-xl">
        <div className="flex flex-col md:flex-row">
          <Link
            href="/features/admin"
            className="flex-1 text-center px-6 py-5 border-b md:border-b-0 md:border-r border-black/10 hover:bg-black/5 transition-colors"
          >
            <span className="text-base font-semibold text-black">ADMIN</span>
          </Link>
          <Link
            href="/features/user"
            className="flex-1 text-center px-6 py-5 hover:bg-black/5 transition-colors"
          >
            <span className="text-base font-semibold text-black">USER</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
