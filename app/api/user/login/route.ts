import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { connectDB } from "../../../../backend/config/db";
import User from "../../../../models/UserModel";
import jwt from 'jsonwebtoken'


export async function POST(request: NextRequest){
    try {
        await connectDB()
        const reqBody = await request.json()
        const {username, email, password} = reqBody

        console.log(reqBody);

        //check if user already exists
        const user = await User.findOne({email})
        if(!user){
            return NextResponse.json({error: "User already exists"}, {status: 401})
        }

        console.log("1", user);

        const validPassword = await bcryptjs.compare(password,user.password);
        console.log("2", validPassword);

        if(!validPassword) {
            return NextResponse.json({error: "User already exists"}, {status: 401})
        }

        const tokenData = {
            id: user._id,
            email: user.email,
            password: user.password
        }
        console.log("3")

        const token = jwt.sign(tokenData, process.env.TOKEN_SECRET!, {expiresIn: "1d"});

        const reponse = NextResponse.json({
            success: true,
            data: {
                user: {email: user?.email,username: user?.username}
            }
        }, {status: 201})
        console.log("4")
        reponse.cookies.set("token",token, {
            httpOnly: true
        })

        return reponse
        
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})

    }
}