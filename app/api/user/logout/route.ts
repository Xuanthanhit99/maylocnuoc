import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "../../../../backend/config/db";

export const GET = async (request: NextRequest) => {
    try {
        await connectDB()

        const reponse = NextResponse.json({
            message: "Logout successful",
            success: true
        })

        reponse.cookies.set("token","", {
            expires: new Date(0),
            httpOnly: true
        })
        return NextResponse.json( { status: 201 });
    } catch (error:any) {
        return NextResponse.json({ error: error.message }, { status: 500 });

    }
}