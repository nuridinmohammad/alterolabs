import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full",
  {
    variants: {
      variant: {
        default: "bg-[#885CF6]",
        outline: "bg-transparent border border-[1px] border-[#222230]",
        secondary: "bg-transparent border border-[1px] border-[#FFF]",
        link: "bg-transparent border border-[1px] border-[#FFF] underline-offset-4 hover:underline",
      },
      size: {
        default: "px-8 py-4",
        sm: "py-2 px-6",
        lg: "px-8 py-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  icon?: boolean;
  sourceIcon?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, icon, sourceIcon, asChild = false, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
