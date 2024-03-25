import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "../../../backend/config/db";
import InformationAdvise from "../../../models/InformationAdviseModel";

export const POST = async (request: NextRequest) => {
    try {
        await connectDB()
        const reqBody = await request.json()
        const {name, phone, textQuestion} = reqBody
        const newInformationAdvise = await new InformationAdvise({
            name,
            phone,
            textQuestion,
        })

        await newInformationAdvise.save()

        return NextResponse.json({status: 201, data: {
            message: ""}, success: true })
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})

    }
}