import GoToDashboardButton from "@/app/components/main/GoToDashboardButton";
import AddBotButton from "@/app/components/main/AddBotButton";

export default async function Home() {
    return (
        <>
            <div className="pt-52 pb-52">
                <h1 className="font-bold text-5xl text-center">Discord Bot</h1>
                <h1 className="font-semibold text-2xl pt-3 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sapien.</h1>
                <div className="flex justify-center items-center pt-10 space-x-5">
                    <AddBotButton />
                    <GoToDashboardButton />
                </div>
            </div>
        </>
    );
}
