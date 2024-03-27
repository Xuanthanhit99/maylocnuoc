import paypal from '@paypal/checkout-server-sdk'
import { NextResponse } from 'next/server';

const clientId = 'Acr9_-_eqeI1qGy51-jLQ2sJpB28EepYAlnCjFIjxmC1uy_-IDLkxl1k07ARadT-J6A9oO13zCicFjtQ';
const clientSecret = 'EDDfsxthbPZTpNatZAITFClewfcMEdyYMPYsmsohOWGs3lrV1CQ0QrVXMuaNLg5ovUP1NX7kBntAMLjy';

const environment =  new paypal.core.SandboxEnvironment(clientId, clientSecret);

const client = new paypal.core.PayPalHttpClient(environment);

export const POST = async () => {
    const request = new paypal.orders.OrdersCreateRequest();

    request.requestBody({
        intent: "CAPTURE",
        purchase_units: [
            {
                amount: {
                    currency_code: "USD",
                    value: "100.00",
                },
            }
        ]
    })

    const reponse = await client.execute(request)
    console.log(reponse)
    return NextResponse.json({id: reponse.result.id});
}
