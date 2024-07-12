"use client";

import Link from "next/link";

export default async function NavLinks() {
    return (
        <nav className="flex items-center space-x-4 lg:space-x-6 h-16">
            <div className="flex items-center px-6">
                <Link href="/" className="flex items-center gap-2 font-semibold">
                    <span>Discord Bot</span>
                </Link>
            </div>
            <Link href={"/"} className="text-sm font-medium transition-colors text-muted-foreground hover:text-primary">
                Home
            </Link>
            <Link href={"/dashboard"}
                  className="text-sm font-medium transition-colors text-muted-foreground hover:text-primary">
                Dashboard
            </Link>
            <Link href={"/docs"}
                  className="text-sm font-medium transition-colors text-muted-foreground hover:text-primary">
                Documentation
            </Link>
        </nav>
    )
}