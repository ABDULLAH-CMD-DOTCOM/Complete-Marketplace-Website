"use client"

import * as React from "react"
import Link from "next/link"
import { FaShoppingCart, FaUserAlt, FaHome, FaInfoCircle, FaCreditCard, FaCar, FaBars, FaHeart } from "react-icons/fa";

import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "About Us",
    href: "/about",
    description:
      "Click here to check more details about Morent Rentals",
  },
  {
    title: "Popular Cars",
    href: "/details",
    description:
      "Checkout Our Most Popular Cars.",
  },
  {
    title: "Admin",
    href: "/admin",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Payment",
    href: "/payment",
    description: "Unlock your order by completing the payment",
  },
  {
    
    title: "Rental Details",
    href: "/Cardetails",
    description:
      "Chekout your Rental Details",
  },
  {
    title: "Whishlist",
    href: "/whishlist",
    description:
      "Your perfect match is waiting in your wishlist.",
  },
]

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Home</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md hover:bg-blue-400 from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Go Back To Home 
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                    Return to the homepage and explore the best car rental deals tailored just for you!
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/cart" title="Cart">
                More pages are comming soon
              </ListItem>
              <ListItem href="/whishlist" title="Whishlist">
              More pages are comming soon
              </ListItem>
              <ListItem href="/about" title="About Us">
              More pages are comming soon
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Pages</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/cart" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Cart
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
