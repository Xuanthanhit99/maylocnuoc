import { NextRequest, NextResponse } from "next/server";
import client from "../../../utils/paypal";
import paypal from '@paypal/checkout-server-sdk'
import { connectDB } from "../../../backend/config/db";
import Product from "../../../models/ProductModel";

export const POST = async (request: NextRequest) => {
    await connectDB()
    const reqBody = await request.json()
    const {name} = reqBody
  if(!reqBody.order_price || !reqBody.user_id)
    return NextResponse.json({success: false, message: "Please Provide order_price And User ID"})


  try{
    const PaypalClient = client()
    const findAPi = await Product.findOne({name});

    //This code is lifted from https://github.com/paypal/Checkout-NodeJS-SDK
    const requestPaypal = new paypal.orders.OrdersCreateRequest()
    requestPaypal.headers['Prefer'] = 'return=representation'
    requestPaypal.requestBody({
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: 'USD',
            value: reqBody.order_price+"",
          },
        },
      ],
    })
    const response = await PaypalClient.execute(request)
    if (response.statusCode !== 201) {
      console.log("RES: ", response)
      return NextResponse.json({success: false, message: "Some Error Occured at backend"})
    }
    // Your Custom Code for doing something with order
    // Usually Store an order in the database like MongoDB

    NextResponse.json({success: true, data: {findAPi}})
  } 
  catch(err){
    console.log("Err at Create Order: ", err)
    return NextResponse.json({success: false, message: "Could Not Found the user"})
  }

}