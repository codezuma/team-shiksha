import Container from "../common/container";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"



const FaqSection = () => {
    return (
        <div className="bg-gray-100 border-t border-gray-200">
            <Container className="py-12 max-w-4xl  border-gray-200">
                <header className="mb-8">
                    <h2 className="text-3xl font-bold font-display text-neutral-900 dark:text-neutral-200">
                        Frequently Asked Questions
                    </h2>
                    <p className="mt-2 text-neutral-500 dark:text-neutral-400">
                        Everything you need to know about Team Shiksha.
                    </p>
                </header>

                <main>
                    <div className="flex flex-col gap-4 mb-2">
                        <h3 className="text-lg font-bold text-neutral-600 dark:text-neutral-200">General</h3>
                    </div>

                    <Accordion type="single" collapsible className="w-full border rounded-lg overflow-hidden">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>What is Team Shiksha?</AccordionTrigger>
                            <AccordionContent>
                                Team Shiksha is a platform that helps students find the right team for their projects.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>How does it work?</AccordionTrigger>
                            <AccordionContent>
                                Team Shiksha works by connecting students with the right team for their projects.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>How do I join a team?</AccordionTrigger>
                            <AccordionContent>
                                You can join a team by clicking on the Sign in with Google button you will be redirected discord server where you can join a team.a
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </main>
            </Container>
        </div>

    )
};

export default FaqSection;
