import Text from "../components/core/text";

import ScheduleForm from "../components/schedule/scheduleForm";

export const Home = () => {
  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(360px,498px)_1fr] p-3">
      <div className="flex flex-col p-20 gap-6 rounded-lg bg-gray-700">
        <div className="flex flex-col gap-1">
          <Text variant="title-lg">Agende um atendimento</Text>
          <Text variant="text-sm">
            Selecione data, horário e informe o nome do cliente para criar o
            agendamento
          </Text>
        </div>
        <ScheduleForm />
      </div>
      <ScheduleList>
    </div>
  );
};
