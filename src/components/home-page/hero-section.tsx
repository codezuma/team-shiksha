import Container from "../common/container";
import { Button } from "../ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <Container className="relative min-h-screen overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-no-repeat before:bg-top before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
      <header className="relative max-w-[85rem] mx-auto px-4 w-fit sm:px-6 lg:px-8 pt-24 pb-10">
        <div className="flex justify-center">
          <a className="inline-flex items-center gap-x-2 bg-gray-100 font-semibold sm:text-sm text-xs text-gray-700 p-2 px-3 rounded-full transition hover:border-gray-300 focus:outline-none focus:border-gray-300 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:border-neutral-600 dark:focus:border-neutral-600" href="#">
            Designing Data Intensive Applications
            <span className="flex items-center gap-x-1">
              <span className="border-s border-gray-200 text-primary ps-2 ">Explore</span>
              <svg className="shrink-0 size-4 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
            </span>
          </a>
        </div>
        <div className="mt-5 max-w-4xl text-center mx-auto">
          <h1 className="block font-extrabold text-balance text-gray-800 text-3xl md:text-4xl lg:text-[2.75rem] dark:text-neutral-200" style={{ lineHeight: 1.3 }}>
            A Growth Community For&nbsp;
            <span className="font-display italic ">
               Everyone Who Wants To
            </span>&nbsp;
            Learn
            in Private BETA.
          </h1>
        </div>
        <div className="mt-5 max-w-2xl text-center mx-auto">
          <p className="sm:text-xl text-lg font-semibold text-gray-500 dark:text-neutral-400">
            Join the community of growth-minded individuals and teams who are&nbsp;
            <span className="text-slate-950">
              learning in
              public and sharing
            </span>&nbsp;their knowledge with the world.
          </p>
        </div>
        <Button variant="outline" className="mt-8 h-11 mx-auto flex justify-center rounded-xl hover:scale-105 transition-all">
          <a className="inline-flex text-sm font-medium py-3" href="#">
            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg" className="mr-2 w-5"  alt="Google" width={200} height={200}/>
            Continue with Google
          </a>
        </Button>

      </header>
    </Container>
  );
}

export default HeroSection;