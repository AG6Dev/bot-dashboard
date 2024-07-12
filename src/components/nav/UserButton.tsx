import {getServerSession} from "next-auth";
import UserDropdown from "@/components/nav/UserDropdown";
import SignInButton from "@/components/nav/SignInButton";
import AuthProvider from "@/components/AuthProvider";

export default async function UserButton() {
    const session = await getServerSession();

    return (
        <div>
            {session ? <UserDropdown/> : <AuthProvider><SignInButton/></AuthProvider>}
        </div>
    )
}