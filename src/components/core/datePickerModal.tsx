import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

export default function DatePickerModal({
  onSelect,
  selected,
}: {
  onSelect?: (date: Date) => void;
  selected?: Date;
}) {
  return (
    <div className="absolute bg-gray-900 mt-2 rounded-lg shadow-lg p-4 z-50">
      <DayPicker
        mode="single"
        required
        selected={selected}
        onSelect={onSelect}
        disabled={{ before: new Date() }}
        modifiers={{
          disabled: { dayOfWeek: [0, 6] },
        }}
        classNames={{
          button_next: "!fill-gray-300 hover:!fill-primary color-primary",
          button_previous: "!fill-gray-300 hover:!fill-primary color-primary",
          selected: "border-2 border-primary text-primary",
          today: "",
          day: "rounded transition-all hover:text-primary cursor-pointer",
          chevron:
            "!fill-gray-300 hover:!fill-primary color-primary cursor-pointer",
        }}
      />
    </div>
  );
}
