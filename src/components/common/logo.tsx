import { cn } from "@/lib/utils";

const Logo = ({ className }: PropsWithClassName) => {
  return <img src="/images/logo.svg" className={cn("h-16", className)} alt="" />;
};

export default Logo;