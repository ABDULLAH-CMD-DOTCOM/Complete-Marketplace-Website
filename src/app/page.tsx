
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import React from "react"
import Cart from "./cart/page";
import Feedback from "@/components/Feedback";
import FAQHelpCenter from "@/components/FAQHelpCenter";
import Cards from "@/components/Cards";
import { PieChart } from "lucide-react";
import { Piecharts } from "@/components/ui/Piechart";
import { NavigationMenuDemo } from "@/components/ui/Navcn";
import StripePayment from "@/components/StripePayment";
import CheckoutPage from "@/components/CheckoutPage";
import dynamic from "next/dynamic";

const DynamicComponentWithNoSSR = dynamic(
  () => import('@/components/StripePayment'),
  { ssr: false }
)

export default function Home() {
  return (
    <div >
    
   {/* <StripePayment/> */}
    
      <Navbar />
      <Hero />
      <Cards />
      <Footer />
    </div>
  );
}
