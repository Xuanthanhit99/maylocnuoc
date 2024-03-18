import { NextRequest } from "next/server"
import { connectDB } from "../../../backend/config/db"
import Pusher from "pusher"
import Comment from "../../../models/CommentModel"
export const POST = async (request: NextRequest) => {
    try {
        await connectDB()
        const reqBody = await request.json()
        console.log("reqBody", reqBody);
        const {name, image, phone, textcomment, replypeople, nameId} = reqBody

        const pusher = new Pusher({
            appId: process.env.PUSHER_APP_ID as string,
            key: process.env.NEXT_PUBLIC_PUSHER_APP_KEY as string,
            secret: process.env.PUSHER_APP_SECRET as string,
            cluster: process.env.PUSHER_APP_CLUSTER as string,
            useTLS: true
        })

        const newUser = await new Comment({
            name, image, phone, textcomment, replypeople
        })

        await newUser.save()

        pusher.trigger('chat', 'hello', {
            message: `${JSON.stringify(reqBody)}`
        })

        return new Response(JSON.stringify({success: "true", data: {name, image, phone, textcomment, replypeople, nameId}}), {status: 201})
    } catch (error) {
        
    } 
}