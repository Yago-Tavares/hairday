import { useForm, useWatch } from "react-hook-form";
import { CalendarBlankIcon, UserSquareIcon } from "@phosphor-icons/react";
import DateInput from "../core/date-input";
import { useState } from "react";
import Text from "../core/text";
import TimeSelect from "../core/time-select";
import Button from "../core/button";
import TextInput from "../core/text-input";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const availableTimes = {
  morning: [
    { hour: "08:00", reserved: true },
    { hour: "08:30", reserved: false },
    { hour: "09:00", reserved: false },
    { hour: "09:30", reserved: false },
    { hour: "10:00", reserved: false },
    { hour: "10:30", reserved: true },
    { hour: "11:00", reserved: false },
    { hour: "11:30", reserved: false },
  ],
  afternoon: [
    { hour: "12:00", reserved: false },
    { hour: "12:30", reserved: false },
    { hour: "13:00", reserved: false },
    { hour: "13:30", reserved: true },
    { hour: "14:00", reserved: false },
    { hour: "14:30", reserved: false },
    { hour: "15:00", reserved: false },
    { hour: "15:30", reserved: false },
    { hour: "16:00", reserved: true },
    { hour: "16:30", reserved: false },
    { hour: "17:00", reserved: false },
    { hour: "17:30", reserved: false },
  ],
  evening: [
    { hour: "18:00", reserved: false },
    { hour: "18:30", reserved: false },
    { hour: "19:00", reserved: false },
    { hour: "19:30", reserved: true },
    { hour: "20:00", reserved: false },
  ],
};

const scheduleFormSchema = z.object({
  date: z.date().refine((date) => date > new Date(), {
    message: "Escolha uma data maior que a de hoje",
  }),
  time: z
    .string()
    .min(1, "Selecione um horário")
    .refine((time) => /^\d{2}:\d{2}$/.test(time), {
      message: "Horário inválido",
    }),
  client: z
    .string()
    .min(3, "Nome deve ter no mínimo 3 caracteres")
    .max(100, "Nome muito longo")
    .refine((name) => name.trim().length > 0, {
      message: "Nome não pode conter apenas espaços",
    }),
});

export default function ScheduleForm() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>("");

  const {
    control,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(scheduleFormSchema),
    defaultValues: {
      date: new Date(),
      client: "",
      time: "",
    },
  });

  const watchTime = useWatch({ control, name: "time" });
  const watchClient = useWatch({ control, name: "client" });
  const watchDate = useWatch({ control, name: "date" });

  const handleSelectTime = (time: string) => {
    setSelectedTime(time);
    setValue("time", time);
  };

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
    setValue("date", date);
  };

  return (
    <div className="flex flex-col gap-2">
      <form
        onSubmit={handleSubmit((data) => console.log(data))}
        className="flex flex-col gap-8"
      >
        {(errors.client || errors.date || errors.time) && (
          <div>
            <Text variant={"text-sm"} className="text-red">
              {errors.client?.message ||
                errors.date?.message ||
                errors.time?.message}
            </Text>
          </div>
        )}
        <div>
          <Text variant="title-md">Data</Text>
          <DateInput
            {...register("date")}
            icon={CalendarBlankIcon}
            onDateChange={handleDateChange}
            value={selectedDate}
          />
        </div>
        <div>
          <Text variant="title-md">Horários</Text>
          <div className="flex flex-col gap-3 pt-2">
            <div>
              <Text variant="text-sm">Manhã</Text>

              <div className="flex flex-wrap gap-1 pt-2">
                {availableTimes.morning.map((time, index) => (
                  <TimeSelect
                    onClick={() => handleSelectTime(time.hour)}
                    key={`${index}-${time}`}
                    disabled={time.reserved}
                    isSelected={selectedTime === time.hour}
                  >
                    <Text variant="text-md">{time.hour}</Text>
                  </TimeSelect>
                ))}
              </div>
            </div>
            <div>
              <Text variant="text-sm">Tarde</Text>

              <div className="flex flex-wrap gap-1 pt-2">
                {availableTimes.afternoon.map((time, index) => (
                  <TimeSelect
                    onClick={() => handleSelectTime(time.hour)}
                    key={`${index}-${time}`}
                    disabled={time.reserved}
                    isSelected={selectedTime === time.hour}
                  >
                    <Text variant="text-md">{time.hour}</Text>
                  </TimeSelect>
                ))}
              </div>
            </div>
            <div>
              <Text variant="text-sm">Noite</Text>

              <div className="flex flex-wrap gap-1 pt-2">
                {availableTimes.evening.map((time, index) => (
                  <TimeSelect
                    onClick={() => handleSelectTime(time.hour)}
                    key={`${index}-${time}`}
                    disabled={time.reserved}
                    isSelected={selectedTime === time.hour}
                  >
                    <Text variant="text-md">{time.hour}</Text>
                  </TimeSelect>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div>
          <Text variant="title-md">Cliente</Text>
          <TextInput {...register("client")} icon={UserSquareIcon} />
        </div>
        <Button
          type="submit"
          disabled={!watchTime || !watchClient || !watchDate}
        >
          Agendar
        </Button>
      </form>
    </div>
  );
}
