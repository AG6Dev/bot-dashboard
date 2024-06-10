import {auth, signIn} from '@/auth'

export default function DiscordButton() {
    const session = auth();

    return (
        <form action={async () => {
            "use server";
            await signIn("discord", { redirectTo: "/dashboard"});
        }}>
            <button type="submit">Sign in with Discord</button>
        </form>
    )
}