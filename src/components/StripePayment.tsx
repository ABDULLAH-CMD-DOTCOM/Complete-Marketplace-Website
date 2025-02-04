"use client";
import { useSearchParams } from "next/navigation";
import convertToSubCurrency from '../lib/ConvertToSubCurrency';
import Checkout from '../components/CheckoutPage';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
    throw new Error('NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not defined');
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const StripePayment = () => {
    const searchParams = useSearchParams();

    // Ensure `amount` is a valid number and greater than zero
    const amount = parseFloat(searchParams.get("amount") || "80"); // Default to $80 if not provided
    const validAmount = isNaN(amount) || amount <= 0 ? 80 : amount; // Ensure amount is valid

    return (
        <div>
            <h1 className="text-xl font-extrabold mb-4 text-black">Payment Info</h1>
            <p className="text-gray-600 mb-4">Please enter your billing info</p>
            <h1 className='font-semibold text-center'>Abdullah has requested ${validAmount.toFixed(2)}</h1>

            <Elements
                stripe={stripePromise}
                options={{
                    mode: 'payment',
                    amount: convertToSubCurrency(validAmount), // Convert only valid amounts
                    currency: 'usd'
                }}
            >
                <Checkout amount={validAmount} />
            </Elements>
        </div>
    );
};

export default StripePayment;
