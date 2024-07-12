import {redirect} from "next/navigation";
import {getServerSession} from "next-auth";

export default async function Dashboard() {
    const session = await getServerSession();
    if (!session) redirect('/')

    return (
        <main className="flex flex-col items-center justify-between p-12">
            <h1 className="font-bold text-2xl">Welcome to the Dashboard, {session?.user?.name}!</h1>
        </main>
    )
}