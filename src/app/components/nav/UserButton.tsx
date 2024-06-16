import {auth, signIn} from "@/auth";
import {redirect} from "next/navigation";
import {DiscordLogoIcon} from "@radix-ui/react-icons";

export default async function UserButton() {
    const session = await auth();

    async function onButton() {
        "use server";
        if (session) {
            redirect("/dashboard")
        } else {
            await signIn("discord", {redirectTo: "/dashboard"})
        }
    }

    return (
        <div className="ml-auto">
            <form action={async () => {
                "use server"
                await onButton();
            }}>
                {session ?
                    <button type="submit">
                        <img src={session.user?.image!} alt={session.user?.name!}
                             className="rounded-full border-white border-2 h-8 w-8"/>
                    </button> :
                    <button type="submit" className="rounded-[0.5rem] h-8 w-8" title="Sign in with Discord">
                        <DiscordLogoIcon className="h-6 w-6 ml-auto mr-auto"/>
                    </button>
                }
            </form>
        </div>
    )
}