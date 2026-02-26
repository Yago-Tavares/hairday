import { cva, type VariantProps } from "class-variance-authority";
import Text from "./text";

export const TimeSelectVariants = cva(
  "py-2 px-5 rounded cursor-pointer w-fit",
  {
    variants: {
      variant: {
        primary: "bg-gray-600 border border-gray-500 hover:bg-gray-500",
      },
      isSelected: {
        true: "border-primary",
      },
      disabled: {
        true: "bg-transparent text-gray-500 border-gray-600 pointer-events-none",
      },
    },
    defaultVariants: {
      variant: "primary",
      isSelected: false,
      disabled: false,
    },
  },
);

export const TimeSelectTextVariants = cva("", {
  variants: {
    variant: {
      primary: "text-gray-200",
    },
    isSelected: {
      true: "text-primary",
    },
    disabled: {
      true: "text-gray-500",
    },
  },
  defaultVariants: {
    variant: "primary",
    isSelected: false,
    disabled: false,
  },
});

interface TimeSelectProps
  extends
    React.ComponentProps<"div">,
    VariantProps<typeof TimeSelectVariants> {}

export default function TimeSelect({
  variant,
  isSelected,
  disabled,
  children,
  ...props
}: TimeSelectProps) {
  return (
    <div
      {...props}
      className={TimeSelectVariants({ variant, isSelected, disabled })}
    >
      <Text
        className={TimeSelectTextVariants({ variant, isSelected, disabled })}
      >
        {children}
      </Text>
    </div>
  );
}
