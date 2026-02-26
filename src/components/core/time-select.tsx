import { cva, type VariantProps } from "class-variance-authority";

export const TimeSelectVariants = cva(
  "py-2 px-5 rounded cursor-pointer w-fit",
  {
    variants: {
      variant: {
        primary:
          "bg-gray-600 border border-gray-500 text-gray-200 hover:bg-gray-500",
      },
      isSelected: {
        true: "border-primary text-primary",
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
      <p>{children}</p>
    </div>
  );
}
