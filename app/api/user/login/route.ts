import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { connectDB } from "../../../../backend/config/db";
import User from "../../../../models/UserModel";
import jwt from 'jsonwebtoken'

connectDB()


export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json()
        const {username, email, password} = reqBody

        console.log(reqBody);

        //check if user already exists
        const user = await User.findOne({email})

        if(!user){
            return NextResponse.json({error: "User already exists"}, {status: 401})
        }

        const validPassword = await bcryptjs.compare(password,user.password);

        if(!validPassword) {
            return NextResponse.json({error: "User already exists"}, {status: 401})
        }

        const tokenData = {
            id: user._id,
            email: user.email,
            password: user.password
        }

        const token = jwt.sign(tokenData, process.env.TOKEN_SECRET!, {expiresIn: "1d"});

        const reponse = NextResponse.json({
            success: true,
            user
        }, {status: 201})

        reponse.cookies.set("token",token, {
            httpOnly: true
        })

        return reponse
        
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})

    }
}