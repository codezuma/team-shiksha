import { cn } from "@/lib/utils";
import Image from "next/image";

const Logo = ({ className }: PropsWithClassName) => {
  return <Image src="/images/logo.svg" className={cn("h-16", className)} alt="Team Shiksha" width={200} height={200} />;
};

export default Logo;