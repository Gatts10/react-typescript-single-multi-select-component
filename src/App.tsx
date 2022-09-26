import { useState } from "react";
import { Select, SelectOption } from "./Select";

const options = [
  { label: "First", value: 1 },
  { label: "Second", value: 2 },
  { label: "Third", value: 3 },
  { label: "Fourth", value: 4 },
  { label: "Fifth", value: 5 },
];

function App() {
  const [singleValue, setSingleValue] = useState<SelectOption | undefined>(
    options[0]
  );
  const [multiValue, setMultiValue] = useState<SelectOption[]>([options[0]]);

  return (
    <>
      <Select
        value={singleValue}
        onChange={(opt) => setSingleValue(opt)}
        options={options}
      />
      <br />
      <Select
        multiple
        options={options}
        value={multiValue}
        onChange={(opt) => setMultiValue(opt)}
      />
    </>
  );
}

export default App;