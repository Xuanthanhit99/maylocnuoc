import NextAuth from "next-auth"
import GoogleProvider from 'next-auth/providers/google';
import { connectDB } from "../../../../backend/config/db";
import User from "../../../../models/UserModel";
import jwt from 'jsonwebtoken'

const hanlder = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
    }),
  ],

  callbacks: {
      async session({session}: any) {
        const sessionUser = await User.findOne({email: session.user.email});
        session.user.id = sessionUser?._id?.toString();
        return session;
      },

      async signIn({ account, profile, user, credentials } : any){
        try {
          await connectDB();
          const UserExits = User.findOne({email: profile.email});
          if(!UserExits) {
            const createGoogle = await User.create({
              email: profile?.email,
              username: profile?.name?.replace(" ", "").toLowerCase(),
              image: profile?.picture,
            })
            await createGoogle.save()

            const token = jwt.sign(createGoogle, process.env.TOKEN_SECRET!, {expiresIn: "1d"});

            createGoogle.cookies.set("token",token, {
              httpOnly: true
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
