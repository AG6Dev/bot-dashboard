import {auth, signIn} from "@/auth";
import {redirect} from "next/navigation";

export default async function GoToDashboardButton() {
    const session = await auth();

    return (
        <form action={async () => {
            "use server";
            if(!session) {
                await signIn("discord", {redirectTo: "/dashboard"})
            } else {
                redirect("/dashboard")
            }
        }}>
            <button type="submit" className="border-white border-2 font-bold pt-2.5 pb-2.5 w-48 rounded-2xl">
                {session ? "Go to Dashboard" : "Sign in via Discord"}
            </button>
        </form>
    )
}