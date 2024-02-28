import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
    try {
        const reponse = NextResponse.json({
            message: "Logout successful",
            success: true
        })

        reponse.cookies.set("token","", {
            expires: new Date(0),
            httpOnly: true
        })
    } catch (error:any) {
        return NextResponse.json({ error: error.message }, { status: 500 });

    }
}