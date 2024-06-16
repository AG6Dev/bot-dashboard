import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import NavLeft from "@/app/components/nav/NavLeft";
import UserButton from "@/app/components/nav/UserButton";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Bot Dashboard",
    description: "Dashboard for discord bot",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="border-b">
                    <div className="flex h-16 items-center px-4">
                        <NavLeft/>
                        <UserButton/>
                    </div>
                </div>
                {children}
            </body>
        </html>
    );
}
