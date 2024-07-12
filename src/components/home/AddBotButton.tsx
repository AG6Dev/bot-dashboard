"use client";

import {useRouter} from "next/navigation";
import {Button} from "@/components/ui/button";
import {DiscordLogoIcon} from "@radix-ui/react-icons";

const addUrl = `https://discord.com/oauth2/authorize?client_id=${process.env.DISCORD_CLIENT_ID}&permissions=8&integration_type=0&scope=bot`;

export default function AddBotButton() {
    const router = useRouter();

    return (
        <Button variant="outline" className="bg-[#5865F2] py-5 w-48 font-bold justify-center text-white"
                onClick={() => router.push(addUrl)}>
            <DiscordLogoIcon className="mr-2"/>
            Add to Server
        </Button>
    )
}