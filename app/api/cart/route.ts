import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "../../../backend/config/db";
import Cart from "../../../models/CartModel";

export const POST = async (request: NextRequest) => {
    try {
        await connectDB()
        const reqBody = await request.json()
        const {product, informationuser, deliveryaddress} = reqBody.data
        const buyProduct = await new Cart({
            informationuser,
            deliveryaddress,
            product,
        })

        await buyProduct.save()

        return NextResponse.json({status: 201, data: {
            message: ""}, success: true })
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})

    }
}