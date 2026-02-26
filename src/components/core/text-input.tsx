import { cva, type VariantProps } from "class-variance-authority";
import Icon from "./icon";

export const TextInputVariants = cva(
  "rounded-lg border flex items-center justify-center gap-2 w-fit focus-within:border-primary",
  {
    variants: {
      variant: {
        primary: "border-gray-500",
      },
      size: {
        md: "h-12 px-3 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export const IconInputVariants = cva("", {
  variants: {
    variant: {
      primary: "fill-primary",
    },
    size: {
      md: "w-5 h-5",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export const InputVariants = cva(
  "outline-none text-gray-200 placeholder:text-gray-500",
  {
    variants: {
      disabled: {
        true: "pointer-events-none",
      },
    },
  },
);

interface TextInputProps
  extends
    Omit<React.ComponentProps<"input">, "size" | "disabled">,
    VariantProps<typeof TextInputVariants>,
    VariantProps<typeof IconInputVariants>,
    VariantProps<typeof InputVariants> {
  icon: React.ComponentProps<typeof Icon>["svg"];
}

export default function TextInput({
  variant,
  size,
  icon,
  disabled,
  ...props
}: TextInputProps) {
  return (
    <div className={TextInputVariants({ variant, size })}>
      <Icon svg={icon} className={IconInputVariants({ variant, size })} />
      <input className={InputVariants({ disabled })} {...props} />
    </div>
  );
}
