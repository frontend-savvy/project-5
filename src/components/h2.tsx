import { BaseProps } from "@/lib/types";
import { cn } from "@/lib/utils";

export default function H2({ className, children }: BaseProps) {
  return (
    <h2
      className={cn(
        "mt-3 capitalize font-bold font-volkhov text-2xl md:text-3xl lg:text-4xl text-navy",
        className
      )}
    >
      {children}
    </h2>
  );
}
