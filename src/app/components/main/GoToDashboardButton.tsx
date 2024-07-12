"use client";

import {signIn, useSession} from "next-auth/react";
import {useRouter} from "next/navigation";

export default function GoToDashboardButton() {
    const router = useRouter();
    const { data: session} = useSession();

    console.log(session)
    return (
        <button onClick={() => session ? router.push("/dashboard") : signIn("discord")}
                className="border-white border-2 font-bold pt-2.5 pb-2.5 w-48 rounded-2xl">
            {session ? "Go to Dashboard" : "Sign in via Discord"}
        </button>
    )
}