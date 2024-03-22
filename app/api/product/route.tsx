import { NextResponse } from "next/server";
import { connectDB } from "../../../backend/config/db"
import Product from "../../../models/ProductModel";

export const GET = async () => {
    try {
        await connectDB();
        const findAPi = await Product.find({});
        return NextResponse.json({data:findAPi, success: true})
        } catch (error) {
            return NextResponse.json({data:error, success: false})

    }
} 