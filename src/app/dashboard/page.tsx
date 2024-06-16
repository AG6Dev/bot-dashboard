import {auth, signIn} from "@/auth";
import SignOutButton from "@/app/components/SignOutButton";
import {redirect} from "next/navigation";

export default async function Dashboard() {
    const session = await auth();
    if (!session) redirect('/')

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>Dashboard</h1>

            <SignOutButton/>
            Welcome, {session?.user?.name}!
        </main>
    )
}