import DeleteBtn from "../Buttons/DeleteBtn";
import SuccessBtn from "../Buttons/SuccessBtn";
import InputSection from "../Inputs/InputSection";
import TextInput from "../Inputs/TextInput";
import "./paragraphQ.css";

export default function ParagraphQ() {
  return (
    <InputSection title="question">
      <TextInput />
      <div className="inputControl-btns">
        <DeleteBtn text="delete question" />
        <SuccessBtn />
      </div>
    </InputSection>
  );
}
