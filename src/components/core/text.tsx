import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

export const TextVariants = cva("", {
  variants: {
    variant: {
      "title-lg": "text-size-title-lg leading-6 font-bold text-gray-100",
      "title-md": "text-size-title-md leading-6 font-bold text-gray-200",
      "title-sm": "text-size-title-sm leading-5 font-bold text-gray-300",
      "text-md": "text-size-text-md leading-6 font-normal text-gray-200",
      "text-sm": "text-size-text-sm leading-5 font-normal text-gray-300",
    },
  },
  defaultVariants: {
    variant: "text-md",
  },
});

interface TextProps extends VariantProps<typeof TextVariants> {
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  children?: React.ReactNode;
}

export default function Text({
  as = "span",
  className,
  variant,
  children,
  ...props
}: TextProps) {
  return React.createElement(
    as,
    {
      className: TextVariants({ variant, className }),
      ...props,
    },
    children,
  );
}
