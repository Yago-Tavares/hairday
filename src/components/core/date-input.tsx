import Icon from "./icon";
import { useEffect, useRef, useState } from "react";
import { InputContainerVariants, InputIconVariants } from "./input";
import { cva, cx, type VariantProps } from "class-variance-authority";
import DatePickerModal from "./datePickerModal";
import { TextVariants } from "./text";
import { CaretDownIcon } from "@phosphor-icons/react";

export const InputVariants = cva(
  "w-full outline-none text-gray-200 placeholder:text-gray-500 cursor-pointer",
  {
    variants: {
      disabled: {
        true: "pointer-events-none",
      },
    },
  },
);

interface DateInputProps
  extends
    Omit<React.ComponentProps<"input">, "size" | "value">,
    VariantProps<typeof InputContainerVariants>,
    VariantProps<typeof InputIconVariants> {
  icon: React.ComponentProps<typeof Icon>["svg"];
  onDateChange?: (date: Date) => void;
  value?: Date;
}

export default function DateInput({
  variant,
  size,
  icon,
  disabled,
  value,
  onDateChange,
  ...props
}: DateInputProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  const handleDateChange = (date: Date) => {
    onDateChange?.(date);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={containerRef}>
      <div className={InputContainerVariants({ variant, size })}>
        <Icon svg={icon} className={InputIconVariants({ variant, size })} />
        <input
          type="text"
          readOnly
          className={cx(InputVariants({ disabled }), TextVariants())}
          value={value?.toLocaleDateString() || ""}
          onClick={() => setIsOpen(!isOpen)}
          {...props}
        />
        <CaretDownIcon
          size={12}
          className={`text-primary transition-transform pointer-events-none ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>
      {isOpen && (
        <DatePickerModal onSelect={handleDateChange} selected={value} />
      )}
    </div>
  );
}
