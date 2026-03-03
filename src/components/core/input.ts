import { cva, type VariantProps } from "class-variance-authority";

export const InputContainerVariants = cva(
  "rounded-lg border flex items-center gap-2 focus-within:border-primary",
  {
    variants: {
      variant: {
        primary: "border-gray-500",
        error: "border-red-500",
        success: "border-green-500",
      },
      size: {
        sm: "h-10 px-2 text-sm",
        md: "h-12 px-3 text-base",
        lg: "h-14 px-4 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export const InputIconVariants = cva("", {
  variants: {
    variant: {
      primary: "fill-primary",
      error: "fill-red-500",
      success: "fill-green-500",
    },
    size: {
      sm: "w-4 h-4",
      md: "w-5 h-5",
      lg: "w-6 h-6",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export type InputSize = VariantProps<typeof InputContainerVariants>["size"];
export type InputVariant = VariantProps<typeof InputContainerVariants>["variant"];