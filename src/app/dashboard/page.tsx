import {auth} from "@/auth";
import SignOutButton from "@/app/components/SignOutButton";

export default async function Dashboard() {
    const session = await auth();

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>Dashboard</h1>

            <SignOutButton/>
            {session?.user?.email}
            <img src={session?.user?.image!}/>
        </main>
    )
}