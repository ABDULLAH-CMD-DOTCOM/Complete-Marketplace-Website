"use client";
import { useSearchParams } from "next/navigation";
import convertToSubCurrency from '../lib/ConvertToSubCurrency';
import Checkout from '../components/CheckoutPage';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

if (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY === undefined) {
    throw new Error('NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not defined')
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const StripePayment = () => {
    const searchParams = useSearchParams();
    const amount = parseFloat(searchParams.get("amount") || "0");

    return (
        <div>
            <h1 className="text-xl font-extrabold mb-4 text-black">Payment Info</h1>
            <p className="text-gray-600 mb-4">Please enter your billing info</p>
            <h1 className=' font-semibold text-center'>Abdullah has requested $ {amount.toFixed(2)}</h1>

            <Elements
                stripe={stripePromise}
                options={{
                    mode: 'payment',
                    amount: convertToSubCurrency(amount),
                    currency: 'usd'
                }}
            >
                <Checkout amount={amount} />
            </Elements>
        </div>
    );
};

export default StripePayment;
