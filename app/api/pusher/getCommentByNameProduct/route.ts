import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "../../../../backend/config/db";
import Comment from "../../../../models/CommentModel";

export const POST =async (request: NextRequest) => {
    try {
        await connectDB()
        const reqBody = await request.json();
        const {nameproduct} = await reqBody
        console.log("nameproduct", nameproduct);
        const getApiComment = await Comment.find({nameproduct})
        return NextResponse.json({data: getApiComment,success: true,status: 201 });

    } catch (error) {
        return NextResponse.json({success: false,status: 500 });
    }
}
