"use client";

import Image from "next/image";
import discordLogo from "@/app/assets/discord-mark-white.svg";
import {useRouter} from "next/navigation";

const addUrl = "https://discord.com/oauth2/authorize?client_id=1176478269449711656&permissions=8&integration_type=0&scope=bot";

export default function AddBotButton() {
    const router = useRouter();

    return (
        <button className="flex items-center space-x-2 border-white border-2 bg-[#5865F2] rounded-2xl pt-2.5 pb-2.5 w-48 font-bold justify-center" onClick={() => router.push(addUrl)}>
            <Image src={discordLogo} alt="Discord" className="w-7"/>
            <span>Add To Server</span>
        </button>
    )
}