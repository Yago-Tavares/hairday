import { cva, type VariantProps } from "class-variance-authority";

export const ButtonVariants = cva(
  "rounded-lg flex items-center justify-center cursor-pointer",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-gray-900 hover:border-2 hover:border-primary-light",
      },
      size: {
        md: "h-14 px-35 text-base",
      },
      disabled: {
        true: "opacity-30 pointer-events-none",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      disabled: false,
    },
  },
);

interface ButtonProps
  extends
    Omit<React.ComponentProps<"button">, "disabled">,
    VariantProps<typeof ButtonVariants> {}

export default function Button({
  variant,
  disabled,
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={ButtonVariants({ variant, disabled })} {...props}>
      {children}
    </button>
  );
}
