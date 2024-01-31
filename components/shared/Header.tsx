import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-centre justify-between">
        <Link href="/" className="w-36 flex items-center">
          <Image
            src="/assets/images/logo.svg"
            width={128}
            height={38}
            alt="Evently Logo"
          ></Image>
        </Link>

        <nav className="hidden md:flex w-96 items-center justify-center min-h-full">
          <NavItems />
        </nav>

        <div className="min-h-full flex items-center justify-end gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/sign-in" />
            <MobileNav />
          </SignedIn>

          <SignedOut>
            <Button asChild className="rounded-full" size="lg">
              <Link href="/sign-in">Login</Link>
            </Button>
            <MobileNav />
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Header;
