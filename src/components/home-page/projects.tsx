import Image from "next/image";
import Container from "../common/container";
import { Badge } from "../ui/badge";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";

export function Projects() {
    return (
        <Container className="py-12">
            <header className="mb-8">
                <h2 className="text-3xl font-bold font-display text-neutral-900 dark:text-neutral-200">
                    {` What We're Building`}
                </h2>
                <p className="mt-2 text-neutral-500 dark:text-neutral-400">
                    Explore our latest projects and we are working on.
                </p>
            </header>
            <BentoGrid className="mx-auto w-full ">
                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        className={item.className}
                    />
                ))}
            </BentoGrid>
        </Container>
    );
}


const items = [
    {
        title: "RSVP",
        description: "A comprehensive event management platform that simplifies event planning, tracking, and guest management.",
        header: <header className="bg-[image:var(--purple-scenery-gradient)] h-full w-full px-2 pt-2 flex flex-col gap-2">
            <div className="flex gap-2">
                <Badge className="bg-color-purple">
                    TypeScript
                </Badge>
                <Badge className="bg-color-purple">
                    Next.js
                </Badge>
                <Badge className="bg-color-purple">
                    Tailwind CSS
                </Badge>
            </div>

            <div className="mx-auto max-w-md mt-4">
                <Image src="/images/projects/rsvp.png" alt="RSVP" width={1400} height={700} />
            </div>
        </header>,
        className: "xl:col-span-7 col-span-4",
    },
    {
        title: "Workok",
        description: "An advanced work management system designed to streamline team collaboration, task tracking, and productivity.",
        header: <header className="bg-[image:var(--red-scenery-gradient)] h-full w-full px-2 pt-2 flex flex-col gap-2">
            <div className="flex gap-2">
                <Badge className="bg-color-red">
                    TypeScript
                </Badge>
                <Badge className="bg-color-red">
                    Next.js
                </Badge>
                <Badge className="bg-color-red">
                    Tailwind CSS
                </Badge>
            </div>
            <div className="mx-auto max-w-md mt-4">
                <Image src="/images/projects/swagsme.png" alt="Workok" width={1400} height={700} />
            </div>
        </header>,
        className: "md:col-span-5 col-span-4",
    },
    {
        title: "OpenLogo",
        description: "An innovative platform for creating and sharing open-source logos, empowering designers and brands with collaborative branding solutions.",
        header: <header className="bg-[image:var(--blue-scenery-gradient)] h-full w-full px-2 pt-2 flex flex-col gap-2">
            <div className="flex gap-2">
                <Badge className="bg-color-blue">
                    TypeScript
                </Badge>
                <Badge className="bg-color-blue">
                    Next.js
                </Badge>
                <Badge className="bg-color-blue">
                    Tailwind CSS
                </Badge>
            </div>
            <div className="mx-auto max-w-md mt-4">
                <Image src="/images/projects/openlogo.png" alt="OpenLogo" width={1400} height={700} />
            </div>
        </header>,
        className: "xl:col-span-5 col-span-4",
    },
    {
        title: "Swags.me",
        description: "A cutting-edge swag store that offers unique, customizable merchandise to boost brand identity and team spirit.",
        header: <header className="bg-[image:var(--green-scenery-gradient)] h-full w-full px-2 pt-2 flex flex-col gap-2">
            <div className="flex gap-2">
                <Badge className="bg-color-green">
                    TypeScript
                </Badge>
            </div>
            <div className="mx-auto max-w-md mt-4 flex-1">
                <Image src="/images/projects/swagsme.png" className="w-full h-full object-cover" alt="Swags.me" width={1400} height={700} />
            </div>
        </header>,
        className: "xl:col-span-7 col-span-4",
    },
];

export default Projects;