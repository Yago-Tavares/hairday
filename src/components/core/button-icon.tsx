import { cva, type VariantProps } from "class-variance-authority";
import Icon from "./icon";

export const ButtonIconVariants = cva(
  "appereance-none cursor-pointer transition m-0 p-0",
);

export const IconVariants = cva("", {
  variants: {
    variant: {
      primary: "fill-primary hover:fill-primary-dark",
    },
    size: {
      md: "w-6 h-6",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

interface ButtonIconProps
  extends React.ComponentProps<"button">, VariantProps<typeof IconVariants> {
  icon: React.ComponentProps<typeof Icon>["svg"];
}

export default function ButtonIcon({
  icon,
  size,
  variant,
  ...props
}: ButtonIconProps) {
  return (
    <button className={ButtonIconVariants()} {...props}>
      <Icon svg={icon} className={IconVariants({ variant, size })} />
    </button>
  );
}
