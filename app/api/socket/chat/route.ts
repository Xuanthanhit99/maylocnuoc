// import { NextApiRequest } from "next";
// import NextApiResponseServerIO from "../../../../utils/next";

// export const POST = async (req: NextApiRequest, res: NextApiResponseServerIO) => {
//   if (req.method === "POST") {
//     // get message
//     const message = req.body;

//     // dispatch to channel "message"
//     res?.socket?.server?.io?.emit("message", message);

//     // return message
//     res.status(201).json(message);
//   }
// };
import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "../../../../backend/config/db";


export async function POST(request: NextRequest){
    try {
        await connectDB()        
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})

    }
}