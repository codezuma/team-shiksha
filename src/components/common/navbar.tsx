"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import Container from "./container";
import Logo from "./logo";
import { motion } from "motion/react";
import { MenuIcon } from "lucide-react";

interface NavItem {
  label: string;
  link: string;
  subItems?: NavItem[];
}

const navItems: NavItem[] = [
  { label: "Roadmaps", link: "#roadmaps" },
  { label: "Projects", link: "#projects" },
  { label: "Members", link: "#members" },
  { label: "About", link: "#about" }
] as const;

const Navbar = () => {
  return (
    <header className="w-full fixed z-50 h-20 top-0 items-end flex backdrop-blur-sm">
      <Container className="grid-primary bg-white rounded-xl">
        <motion.div className="flex justify-start items-center">
          <Logo />
          <ul className="space-x-6 lg:block hidden ml-14">
            {navItems.map((item, index) => (
              <li key={index} className="inline-block text-gray-600 font-medium text-[15px] px-2">
                <Link href={item && item.link}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <Button variant="ghost" size="icon" className="ml-auto lg:hidden smooth-button">
            <MenuIcon className="size-5 text-black" />
          </Button>
          <Button className="ml-auto hidden lg:block smooth-button">
            Join Us
          </Button>
        </motion.div>
      </Container>
    </header>
  );
};

export default Navbar;
