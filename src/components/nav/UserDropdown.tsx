import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {getServerSession} from "next-auth";
import SignOutButton from "@/components/nav/SignOutButton";


export default async function UserDropdown() {
    const session = await getServerSession();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src={session?.user?.image ?? ""} alt={session?.user?.name ?? ""}/>
                        <AvatarFallback>{session?.user?.name?.charAt(0)}</AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel className="text-center py-3">Hello, {session?.user?.name}!</DropdownMenuLabel>
                <DropdownMenuItem>
                    <SignOutButton />
                </DropdownMenuItem>

            </DropdownMenuContent>
        </DropdownMenu>
    )
}