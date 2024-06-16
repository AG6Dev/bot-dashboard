import Link from "next/link";
import {auth} from "@/auth";

export default async function NavLeft() {
    const session = await auth();

    return (
        <nav className="flex items-center space-x-4 lg:space-x-6">
            <div className="flex h-[60px] items-center px-6">
                <Link href="/" className="flex items-center gap-2 font-semibold">
                    <span>Bot Dashboard</span>
                </Link>
            </div>
            <Link href={"/dashboard"}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-gray-200">
                Dashboard
            </Link>
            <Link href={"/docs"}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-text-gray-200">
                Documentation
            </Link>
        </nav>
    )
}