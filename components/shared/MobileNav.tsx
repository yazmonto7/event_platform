import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { Separator } from "../ui/separator";
import NavItems from "./NavItems";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden">
        <Image
          src="/assets/icons/menu.svg"
          width={24}
          height={24}
          alt="menu"
          className="cursor-pointer"
        ></Image>
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
        <Image
          src="/assets/images/logo.svg"
          alt="logo"
          width={128}
          height={38}
        />
        <Separator className="border border-grey-50" />
        <NavItems />
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
