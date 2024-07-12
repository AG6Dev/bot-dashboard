import React from "react";
import NavLinks from "@/components/nav/NavLinks";
import UserButton from "@/components/nav/UserButton";

export default function Navbar() {
    return (
        <div className="border-b">
            <div className="flex h-16 items-center px-4">
                <NavLinks/>
                <div className="ml-auto flex items-center px-4">
                    <UserButton/>
                </div>
            </div>
        </div>
    )
}