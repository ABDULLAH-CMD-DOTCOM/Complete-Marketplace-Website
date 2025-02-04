import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

interface IParams {
    searchParams: {
        amount: number
    }
}

const PaymentSuccess = ({ searchParams }: IParams) => {
    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
                <CheckCircle className="text-green-500 w-24 h-24 animate-bounce" />

                <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mt-6">
                    Payment Successful!
                </h1>

                <p className="text-lg md:text-xl text-gray-600 mt-3">
                    Thank you for your purchase. Your payment of  
                    <span className="font-semibold text-gray-800">  </span>
                    has been received.
                </p>

                <Link href="/">
                <button className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-900 text-white font-semibold rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
    Back to Home
</button>

                </Link>
            </div>
            <Footer />
        </>
    )
}

export default PaymentSuccess
