"use client";

import {DiscordLogoIcon} from "@radix-ui/react-icons";
import {signIn, useSession} from "next-auth/react";
import {useRouter} from "next/navigation";

export default function UserButton() {
    const router = useRouter();
    const { data: session} = useSession();

    return (
        <div className="ml-auto">
            {session ?
                <button onClick={() => router.push("/dashboard")}>
                    <img src={session.user?.image!} alt={session.user?.name!}
                         className="rounded-full border-white border-2 h-8 w-8"/>
                </button> :
                <button onClick={() => signIn("discord")} className="rounded-[0.5rem] h-8 w-8"
                        title="Sign in with Discord">
                    <DiscordLogoIcon className="h-6 w-6 ml-auto mr-auto"/>
                </button>}

        </div>
    )
}