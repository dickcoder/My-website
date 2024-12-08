'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import HyperText from "@/components/ui/hyper-text";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { UserButton, SignInButton, useUser } from "@clerk/nextjs"
import { User2 } from "lucide-react" 
import Lottie from "lottie-react";
import logoAnimation from "@/public/animations/LOOPOASIS.json";

const Navbar = () => {
  const { isSignedIn } = useUser()
  const lottieRef = useRef<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const randomFrame = Math.floor(Math.random() * (240 - 60) + 60);
    lottieRef.current?.goToAndStop(randomFrame, true);
  }, []);

  return (
    <nav className="header fixed top-0 z-50 left-0 right-0 bg-gray-900/30 backdrop-blur-md border-gray-100/10">
      <div className="header-container mx-auto px-16 py-10 flex justify-between items-center">
        <div 
          onClick={() => {
            if (isPlaying) {
              lottieRef.current?.pause();
            } else {
              lottieRef.current?.play();
            }
            setIsPlaying(!isPlaying);
          }}
        >
          <Lottie 
            lottieRef={lottieRef}
            animationData={logoAnimation}
            className="h-24 w-auto"
            loop={true}
            autoplay={false}
            initialSegment={[0, 168]}
          />
        </div>
        
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <HyperText
                  className="text-5xl font-bold text-white"
                  text="Home"
                  />
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <HyperText
                  className="text-5xl font-bold text-white"
                  text="Content"
                />
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] bg-white">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/blog"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Blog
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Explore my thoughts and experiences through my blog posts.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="/photography" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Photography</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          View my photography portfolio and tips.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="/travel" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Travel Journal</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Read about my travel experiences and adventures.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="/music-art" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Music & Art</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Explore my musical and artistic creations.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/product" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <HyperText
                  className="text-5xl font-bold text-white"
                  text="Product"
                  />
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/message" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <HyperText
                  className="text-5xl font-bold text-white"
                  text="Message"
                  />
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        <div className="flex items-center">
          {isSignedIn ? (
            <UserButton 
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  avatarBox: "w-16 h-16" // 自定义头像大小
                }
              }}
            />
          ) : (
            <SignInButton mode="modal">
              <button className="relative overflow-hidden rounded-full bg-gray-800 text-white font-bold text-xl px-8 py-4 cursor-pointer transition-colors duration-400 ease-in-out hover:border-gray-500 hover:bg-gray-700">
                <span className="absolute inset-0 bg-gradient-to-br from-transparent to-white opacity-25 transform scale-0 transition-transform duration-500 ease-out group-hover:scale-4"></span>
                <span className="relative">Login</span>
              </button>
            </SignInButton>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar

