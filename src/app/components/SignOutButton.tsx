import {auth, signIn, signOut} from '@/auth'
import {redirect} from "next/navigation";

export default function SignOutButton() {
    const session = auth();

    return (
        <form action={async () => {
            "use server";
            await signOut({redirectTo: "/"});
        }}>
            <button type="submit">Sign out</button>
        </form>
    )
}