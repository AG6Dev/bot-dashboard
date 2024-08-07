"use client";

import {Button} from "@/components/ui/button";
import {signOut} from "next-auth/react";

export default function SignOutButton() {
    return (
        <div>
            <Button onClick={() => signOut()}>Sign out</Button>
        </div>
    );
}