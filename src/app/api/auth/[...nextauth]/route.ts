import NextAuth from "next-auth";
import DiscordProvider from "next-auth/providers/discord";


export const handler = NextAuth({
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        DiscordProvider({
            clientId: process.env.DISCORD_CLIENT_ID as string,
            clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
            authorization: "https://discord.com/api/oauth2/authorize?scope=identify+email+guilds",
        })
    ],
    callbacks: {
        async redirect({ baseUrl}) {
            return baseUrl + "/dashboard"
        },

        async signIn({ account }) {
            const token = account?.access_token;
            const user = await fetch("https://discord.com/api/users/@me", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(res => res.json());

            console.log(user);
            return true;
        }
    }
})

export { handler as GET, handler as POST }