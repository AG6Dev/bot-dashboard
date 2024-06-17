import Link from "next/link";

export default async function NavLeft() {
    return (
        <nav className="flex items-center space-x-4 lg:space-x-6">
            <div className="flex h-[60px] items-center px-6">
                <Link href="/" className="flex items-center gap-2 font-semibold">
                    <span>Discord Bot</span>
                </Link>
            </div>
            <Link href={"/"} className="text-sm font-medium transition-colors hover:text-gray-200">
                Home
            </Link>
            <Link href={"/dashboard"}
                  className="text-sm font-medium transition-colors hover:text-gray-200">
                Dashboard
            </Link>
            <Link href={"/docs"}
                  className="text-sm font-medium transition-colors hover:text-gray-200">
                Documentation
            </Link>
        </nav>
    )
}