import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const { priceId } = req.body;



    if (req.method != 'POST') {

        return res.status(405).json({ message: "Method Not Allowed" })  // 405 Method Not Allowed
    }


    if (!priceId) {
        return res.status(400).json({ message: "Price not found" })  // 400 Bad Request
    }



    // get price id from your database or from stripe dashboard
    const success_Url = `${process.env.NEXT_URL}/sucess?session_id={CHECKOUT_SESSION_ID}`

    const cancel_Url = `${process.env.NEXT_URL}/`


    const checkoutSession = await stripe.checkout.sessions.create({


        success_url: success_Url,
        cancel_url: cancel_Url,
        mode: 'payment',
        line_items: [{
            price: priceId,
            quantity: 1,
        }]
    })


    return res.status(201).json({
        checkoutUrl: checkoutSession.url,
    })

} 