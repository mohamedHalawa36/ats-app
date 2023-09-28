import DeleteBtn from "../Buttons/DeleteBtn";
import SuccessBtn from "../Buttons/SuccessBtn";
import CheckboxInput from "../Inputs/CheckboxInput";
import InputSection from "../Inputs/InputSection";
import TextInput from "../Inputs/TextInput";
import "./paragraphQ.css";

export default function YesNoQ() {
  return (
    <InputSection title="question">
      <TextInput />
      <CheckboxInput label="Disqualify candidate if the answer is no" />
      <div className="inputControl-btns">
        <DeleteBtn text="delete question" />
        <SuccessBtn />
      </div>
    </InputSection>
  );
}
