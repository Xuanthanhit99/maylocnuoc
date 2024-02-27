import NextAuth from "next-auth"
import GoogleProvider from 'next-auth/providers/google';
import { connectDB } from "../../../../backend/config/db";
import User from "../../../../models/UserModel";
// import User from "../../../../models/UserModel";
// import { connectDB } from "../../../../../backend/config/db";
// import User from "../../../../../backend/models/UserModel";

console.log("first", process.env.GOOGLE_ID );
const hanlder = NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
    }),
    // ...add more providers here
  ],

  callbacks: {
      async session({session}: any) {
        const sessionUser = await User.findOne({email: session.user.email});
        console.log("first123", sessionUser);
        session.user.id = sessionUser?._id?.toString();
        return session;
      },

      async signIn({ account, profile, user, credentials } : any){
        try {
          await connectDB();
          console.log("1")
          const UserExits = User.findOne({email: profile.email});
          console.log("2", profile)
          if(!UserExits) {
            console.log("3")
            await User.create({
              email: profile?.email,
              username: profile?.name?.replace(" ", "").toLowerCase(),
              image: profile?.picture,
            })
          }

          return true
        } catch ({error} : any) {
          console.log("Error checking if user exists: ", error?.message);
          return false
        }
      }
  }
}
)

export {hanlder as GET , hanlder as POST}
