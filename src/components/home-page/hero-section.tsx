"use client";
import {
  IconBrandGolang,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandOpenSource,
  IconBrandPython,
  IconBrandReact
} from "@tabler/icons-react";
import { motion } from "motion/react";
import Container from "../common/container";
import { Button } from "../ui/button";
import MembersCompany from "./members-companies";

const TABLER_CONFIG = {
  strokeWidth: 1.5,
  size: 20
};

const DEFAULT_ICON_CONTAINER_TW_CN = "p-2 rounded-lg shadow-md shadow-neutral-300 size-12 flex items-center justify-center";

const GRADIENT_ICON_CONTAINER_TW_CN = `${DEFAULT_ICON_CONTAINER_TW_CN} text-white size-12`;

const HeroSection = () => {
  return (
    <Container className="relative min-h-screen overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-no-repeat before:bg-top before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
      <header className="relative max-w-[85rem] mx-auto px-4 w-fit sm:px-6 lg:px-8 pt-24 pb-10">
        <div className="flex justify-center">
          <a className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-xs text-gray-600 p-2 px-3 rounded-full transition hover:border-gray-300 focus:outline-none focus:border-gray-300 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:border-neutral-600 dark:focus:border-neutral-600" href="#">
            Designing Data Intensive Applications
            <span className="flex items-center gap-x-1">
              <span className="border-s border-gray-200 text-primary ps-2 ">Explore</span>
              <svg className="shrink-0 size-4 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
            </span>
          </a>
        </div>
        <div className="mt-5 max-w-4xl text-center mx-auto">
          <h1 className="block font-bold text-gray-800 text-4xl md:text-4xl lg:text-[2.75rem] dark:text-neutral-200" style={{ lineHeight: 1.3 }}>
            A Growth Community For Everyone Who Wants To Learn
            in Private BETA.
          </h1>
        </div>
        <div className="mt-5 max-w-3xl text-center mx-auto">
          <p className="text-lg text-gray-600 dark:text-neutral-400">
            Join the community of growth-minded individuals and teams who are learning in public and sharing their knowledge with the world.
          </p>
        </div>
        <Button variant="outline" className="mt-8 h-11 mx-auto flex justify-center rounded-xl hover:scale-105 transition-all">
          <a className="inline-flex text-sm font-medium py-3" href="#">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg" className="mr-2 w-5" />
            Continue with Google
          </a>
        </Button>

        {/* Animated Icons */}
        <div className="icons-wrapper">
          {/* right side icons */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: -16 }}
            transition={{ type: "spring" }}
            whileHover={{ scale: 0.9 }}
            className={`${GRADIENT_ICON_CONTAINER_TW_CN} absolute top-16 -right-24`}
            style={{ background: '#61DAFB' }} // React brand color
          >
            <IconBrandReact {...TABLER_CONFIG} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: 12 }}
            transition={{ type: "spring", delay: 0.1 }}
            whileHover={{ scale: 0.9 }}
            className={`${GRADIENT_ICON_CONTAINER_TW_CN} absolute top-36 -right-16`}
            style={{ background: '#339933' }} // Node.js brand color
          >
            <IconBrandNodejs {...TABLER_CONFIG} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: -8 }}
            transition={{ type: "spring", delay: 0.2 }}
            whileHover={{ scale: 0.9 }}
            className={`${GRADIENT_ICON_CONTAINER_TW_CN} absolute top-64 -right-20`}
            style={{ background: '#00ADD8' }} // Golang brand color
          >
            <IconBrandGolang {...TABLER_CONFIG} />
          </motion.div>

          {/* left side icons */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: 16 }}
            transition={{ type: "spring", delay: 0.15 }}
            whileHover={{ scale: 0.9 }}
            className={`${GRADIENT_ICON_CONTAINER_TW_CN} absolute top-16 -left-24`}
            style={{ background: '#3DA639' }} // Open Source brand color
          >
            <IconBrandOpenSource {...TABLER_CONFIG} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: -12 }}
            transition={{ type: "spring", delay: 0.25 }}
            whileHover={{ scale: 0.9 }}
            className={`${GRADIENT_ICON_CONTAINER_TW_CN} absolute top-36 -left-16`}
            style={{ background: '#000000' }} // Next.js brand color
          >
            <IconBrandNextjs {...TABLER_CONFIG} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: 8 }}
            transition={{ type: "spring", delay: 0.35 }}
            whileHover={{ scale: 0.9 }}
            className={`${GRADIENT_ICON_CONTAINER_TW_CN} absolute top-64 -left-20`}
            style={{ background: '#3776AB' }} // Python brand color
          >
            <IconBrandPython {...TABLER_CONFIG} />
          </motion.div>
        </div>
      </header>
      <MembersCompany className="mt-12" />
    </Container>
  );
}

export default HeroSection;