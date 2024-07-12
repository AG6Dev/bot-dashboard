"use client";

import {signIn, useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import {Button} from "@/components/ui/button";

export default function GoToDashboardButton() {
    const router = useRouter();
    const { data: session} = useSession();

    return (
        <Button onClick={() => session ? router.push("/dashboard") : signIn("discord")} variant="outline" className="w-48 py-5">
            {session ? "Go to Dashboard" : "Sign in via Discord"}
        </Button>
    )
}