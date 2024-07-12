"use client";

import {signIn} from "next-auth/react";
import {Button} from "@/components/ui/button";
import {DiscordLogoIcon} from "@radix-ui/react-icons";

export default function SignInButton() {
    return (
        <Button onClick={() => signIn("discord")}>
            <DiscordLogoIcon className="mr-2"/>
            Sign In with Discord
        </Button>
    )
}

