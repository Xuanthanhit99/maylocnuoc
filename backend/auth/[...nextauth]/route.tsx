import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import {connectDB}  from "../../config/db"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: "",
      clientSecret: "",
    }),
    // ...add more providers here
  ],
}
export default NextAuth(authOptions)