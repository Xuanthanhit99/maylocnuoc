import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "../../../backend/config/db";
import Cart from "../../../models/CartModel";
import { getRandomString } from "../../../utils/RandomCode";
const baseString =
"0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
export const POST = async (request: NextRequest) => {
  try {
    await connectDB();
    const reqBody = await request.json();
    let codeOrder = ''
    for (let i = 0; i < 10; i += 1) {
      codeOrder = getRandomString(12, baseString)
    }

    
    const { product, informationuser, deliveryaddress, trangthai } =
      reqBody.data;
      console.log("reqBody.data", reqBody.data);
      console.log("reqBody.codeOrder", codeOrder);
    const buyProduct = await new Cart({
      informationuser,
      deliveryaddress,
      product,
      trangthai,
      paymentstatus: product?.paymentstatus,
      orderstatus: product?.orderstatus,
      codeorders: codeOrder
    });

    await buyProduct.save();

    return NextResponse.json({
      status: 201,
      data: {
        message: "Bạn đã đặt hàng thành công",
        codeOrder,
        informationuser,
      },
      success: true,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
