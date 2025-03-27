import { cn } from "@/lib/utils";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-8 lg:grid-cols-12",
                className,
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "group/bento shadow-input row-span-1 flex flex-col overflow-hidden justify-between space-y-4 rounded-xl border border-neutral-200 bg-white  transition duration-200  dark:border-white/[0.2] dark:bg-black dark:shadow-none",
                className,
            )}
        >
            {header}
            <div className="transition duration-200 px-4 pb-4">
                <div className="mb-2 font-bold text-xl tracking-wide text-slate-950 font-display dark:text-neutral-200">
                    {title}
                </div>
                <div className="font-normal text-sm text-neutral-600 dark:text-neutral-300">
                    {description}
                </div>
            </div>
        </div>
    );
};
