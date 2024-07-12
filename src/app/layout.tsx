import type {Metadata} from "next";
import {Inter as FontSans} from "next/font/google";
import {cn} from "@/lib/utils"
import "./styles/globals.css";
import Navbar from "@/components/Navbar";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata: Metadata = {
    title: "Bot Dashboard",
    description: "Dashboard for discord guild",
};

export default async function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
        <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>

        <Navbar/>

        {children}
        </body>
        </html>
    );
}
