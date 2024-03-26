import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "../../../../backend/config/db";
import Comment from "../../../../models/CommentModel";

export const POST =async (request: NextRequest) => {
    try {
        await connectDB()
        const reqBody = await request.json();
        const {
            name,
            image,
            phone,
            textcomment,
            replypeople,
            nameId,
            evaluate,
            nameproduct,
            isAdmin,
            isPurchase,
          } = reqBody;
        
        await Comment.findOneAndUpdate({name: name}, {name,
            image,
            phone,
            textcomment,
            replypeople,
            nameId,
            evaluate,
            nameproduct,
            isAdmin,
            isPurchase,}, {new: true})
        return NextResponse.json({success: true,status: 201 });

    } catch (error) {
        return NextResponse.json({message: error, success: false,status: 500 });
    }
}
