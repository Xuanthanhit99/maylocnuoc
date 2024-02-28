import { NextRequest, NextResponse } from "next/server";
import User from "../../../../models/UserModel";
import jwt from  "jsonwebtoken"
import bcrypt from 'bcryptjs'
import { sendEmail } from "../../../../lib/auth";
export const POST = async (request: NextRequest) => {
    const jsonRequest = await request.json();
    const {username, password, email} = jsonRequest
    console.log("email", email);

    const user = await User.findOne({email});

    if(user) {
        return NextResponse.json({success: false}, {status: 401})
    }

    const salt = await bcrypt.genSalt(10);
    const jwtToken = await bcrypt.hash(password,salt);

    const newUser = await new User({
        username,
        password:jwtToken,
        email
    })

    const savedUser  = await newUser.save()

    await sendEmail({email: email, emailType: "VERIFY", userId: savedUser._id});

    return NextResponse.json({message: "User created successfully",
    success: true,
})
}