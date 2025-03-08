"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import Container from "./container";
import Logo from "./logo";
import { motion } from "motion/react";

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
          <Button className="ml-auto hidden lg:block smooth-button">
            Book a Demo
          </Button>
        </motion.div>
      </Container>
    </header>
  );
};

export default Navbar;
