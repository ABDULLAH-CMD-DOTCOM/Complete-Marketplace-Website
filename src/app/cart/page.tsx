"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

const Cart = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const [totalAmount, setTotalAmount] = useState<number>(0);

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        setCart(parsedCart);

        // Calculate total price dynamically
        const total = parsedCart.reduce(
          (sum: number, item: Product) => sum + Number(item.price),
          0
        );
        setTotalAmount(total);
      } catch (e) {
        console.error("Error parsing cart from localStorage:", e);
      }
    }
  }, []);

  const removeFromCart = (productId: number) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // Recalculate total price
    const total = updatedCart.reduce(
      (sum: number, item: Product) => sum + Number(item.price),
      0
    );
    setTotalAmount(total);

    toast.success("Item removed from cart!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const clearCart = () => {
    setCart([]);
    setTotalAmount(0);
    localStorage.setItem("cart", JSON.stringify([]));

    toast.info("Cart cleared successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-6 pt-[70px]">
        <h1 className="text-4xl text-center font-bold mb-8 text-[#3563E9]">Your Cart</h1>

        {cart.length === 0 ? (
          <div className="text-center text-lg text-gray-600">
            <p>Your cart is empty.</p>
            <Link
              href="/"
              className="mt-4 inline-block py-2 px-6 bg-[#3563E9] text-white rounded-xl hover:bg-blue-500 transition-all shadow-md"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {cart.map((product) => (
              <div
                key={product.id}
                className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200"
              >
                <div className="flex items-center space-x-4">
                  <Image
                    src={product.image}
                    alt={product.title}
                    className="w-16 h-16 object-cover rounded-lg"
                    width={64}
                    height={64}
                  />
                  <div>
                    <h3 className="font-semibold text-lg text-[#1d3557]">{product.title}</h3>
                    <p className="text-gray-600 text-sm">${product.price}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(product.id)}
                  className="py-2 px-4 bg-[#e63946] text-white rounded-xl hover:bg-[#d03434] transition-all duration-200 shadow-md"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}

        {cart.length > 0 && (
          <div className="mt-6 text-center">
            <p className="text-xl font-semibold text-gray-800">
              Total: <span className="text-[#3563E9]">${totalAmount.toFixed(2)}</span>
            </p>
            <div className="mt-4 flex justify-center gap-6">
              <Link
                href="/"
                className="py-2 px-6 bg-[#3563E9] text-white rounded-xl hover:bg-blue-500 transition-all shadow-md"
              >
                Continue Shopping
              </Link>
              <button
                onClick={clearCart}
                className="py-2 px-6 bg-[#e63946] text-white rounded-xl hover:bg-[#d03434] transition-all shadow-md"
              >
                Clear Cart
              </button>
            </div>

            {/* Payment Button - Pass totalAmount dynamically */}
            <div className="mt-8">
              <Link
                href={`/payment?amount=${totalAmount.toFixed(2)}`}
                className="inline-block py-3 px-8 rounded-xl bg-green-500 text-white text-lg font-bold shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-green-600 hover:shadow-2xl"
              >
                Proceed to Payment
              </Link>
            </div>
          </div>
        )}
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default Cart;
