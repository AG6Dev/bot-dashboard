"use client";

import {signOut} from "next-auth/react";

//TODO: Temporary will be replaced in the future
export default function SignOutButton() {
    return (
        <button onClick={() => signOut()}>Sign out</button>
    )
}
