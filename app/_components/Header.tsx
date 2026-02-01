import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const Header = () => {
  const navItems = [
    {
      name: "Pricing",
      path: "pricing",
    },
    {
      name: "Contact Us",
      path: "contact-us",
    },
  ];

  return (
    <div className="flex justify-between items-center p-4 shadow">
      {/* logo */}
      <div className="flex gap-2 items-center">
        <Image
          src="/logo.svg"
          alt="code craft ai logo"
          width={35}
          height={35}
        />
        <h2 className="font-bold text-xl">Code Craft AI</h2>
      </div>

      {/* nav link items */}
      <div className="flex gap-3">
        {navItems.map((navItem, index) => (
          <Button variant={"ghost"} key={index}>
            {navItem.name}
          </Button>
        ))}
      </div>

      {/* get started button */}
      <Button>
        Get Started
        <ArrowRight />
      </Button>
    </div>
  );
};

export default Header;
