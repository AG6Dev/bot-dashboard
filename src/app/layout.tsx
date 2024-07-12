import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import NavLeft from "@/app/components/nav/NavLeft";
import UserButton from "@/app/components/nav/UserButton";
import SignOutButton from "@/app/components/SignOutButton";
import AuthProvider from "@/app/components/AuthProvider";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Bot Dashboard",
    description: "Dashboard for discord guild",
};

export default async function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
        <body className={inter.className}>

        <div className="border-b">
            <div className="flex h-16 items-center px-4">
                <AuthProvider>
                    <NavLeft/>
                    <div className="ml-auto flex items-center space-x-6">
                        <UserButton/>
                        <SignOutButton/>
                    </div>
                </AuthProvider>
            </div>
        </div>

        {children}
        </body>
        </html>
    );
}
