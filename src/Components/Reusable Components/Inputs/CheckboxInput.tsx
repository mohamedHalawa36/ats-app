import { Checkbox } from "antd";
import  { useState } from "react";

type CheckboxInputProps = {
  label: string;
};
export default function CheckboxInput({ label }: CheckboxInputProps) {
  const [checked, setChecked] = useState(false);
  return (
    <div className="checkbox-container">
      <Checkbox
        className="antd-checkbox"
        checked={checked}
        onChange={() => setChecked((isChecked) => !isChecked)}
        style={{ fontSize: "15px", textTransform: "capitalize",marginTop:"25px" }}
      >
        {label}
      </Checkbox>{" "}
    </div>
  );
}
