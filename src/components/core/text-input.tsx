import { cva, cx, type VariantProps } from "class-variance-authority";
import Icon from "./icon";
import { TextVariants } from "./text";
import { InputContainerVariants, InputIconVariants } from "./input";

export const InputVariants = cva(
  "w-full outline-none text-gray-200 placeholder:text-gray-500",
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
    VariantProps<typeof InputContainerVariants>,
    VariantProps<typeof InputIconVariants>,
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
    <div className={InputContainerVariants({ variant, size })}>
      <Icon svg={icon} className={InputIconVariants({ variant, size })} />
      <input
        className={cx(InputVariants({ disabled }), TextVariants())}
        {...props}
      />
    </div>
  );
}
