import paypal from '@paypal/checkout-server-sdk'
import { NextResponse } from 'next/server';

const clientId = 'AZSFn2tHqE7PTE9ErKabH_UqHoRfTc6NLbzbbQzloQSAbaf4Kc-hAXneewClVEpjDQDaGQGxSE69tIjo';
const clientSecret = 'EEMiFZpse2AQldDvuz-PSvGSMXwINEreMGIKq5VWwKGYA1HUhRpisDJV7mGeQYDcG9dtrjtqbJr9bVBO';

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
