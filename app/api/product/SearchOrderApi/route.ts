import { NextRequest, NextResponse } from "next/server";
import Product from "../../../../models/ProductModel";
import { connectDB } from "../../../../backend/config/db";
import Cart from "../../../../models/CartModel";

export const POST = async (request: NextRequest) => {
    try {
        await connectDB();
        const reqBody = await request.json()
        const {madonhang, phone} = reqBody
        const findAPi = await Cart.findOne({madonhang,phone});
        console.log("findAPi", findAPi.product);
        const ObjectStatus = {
            "trangthai": findAPi?.trangthai,
            "paymentstatus": findAPi?.paymentstatus,
            "orderstatus": findAPi?.orderstatus,
            "codeorders": findAPi?.codeorders,
        }
        return NextResponse.json({data: [findAPi?.informationuser,findAPi?.deliveryaddress,findAPi.product,ObjectStatus], success: true})
        } catch (error) {
            return NextResponse.json({data:error, success: false})

    }
} 