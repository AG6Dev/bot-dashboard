import GoToDashboardButton from "@/components/home/GoToDashboardButton";
import AddBotButton from "@/components/home/AddBotButton";
import AuthProvider from "@/components/AuthProvider";

export default async function Home() {
    return (
        <>
            <div className="my-52">
                <h1 className="font-bold text-5xl text-center">Discord Bot</h1>
                <h1 className="font-semibold text-2xl mt-3 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sapien.</h1>
                <div className="flex justify-center items-center mt-10 space-x-5">
                    <AuthProvider>
                        <AddBotButton />
                        <GoToDashboardButton />
                    </AuthProvider>
                </div>
            </div>
        </>
    );
}
