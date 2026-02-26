import Button from "./components/core/button";
import ButtonIcon from "./components/core/button-icon";
import TextInput from "./components/core/text-input";
import TimeSelect from "./components/core/time-select";
import { UserSquareIcon, TrashIcon } from "@phosphor-icons/react";

function App() {
  return (
    <>
      <h1 className="text-yellow-light">Hairday</h1>
      <Button variant="primary">AGENDAR</Button>
      <TextInput icon={UserSquareIcon} placeholder="Nome do cliente" />
      <ButtonIcon icon={TrashIcon} />
      <div className="flex gap-2 mt-2">
        <TimeSelect isSelected={true}>08:00</TimeSelect>
        <TimeSelect disabled={true}>09:00</TimeSelect>
        <TimeSelect>10:00</TimeSelect>
      </div>
    </>
  );
}

export default App;
