import InputSection from "../Inputs/InputSection";
import TextInput from "../Inputs/TextInput";
import ChoiceInput from "../Inputs/ChoiceInput";
import CheckboxInput from "../Inputs/CheckboxInput";
import DeleteBtn from "../Buttons/DeleteBtn";
import SuccessBtn from "../Buttons/SuccessBtn";

export default function MultChoiceQ() {
  return (
    <>
      <InputSection title="question">
        <TextInput />
      </InputSection>
      <InputSection title="choice">
        <ChoiceInput />
        <ChoiceInput />
        <CheckboxInput label={`Enable "Other" option`} />
        <div className="inputControl-btns">
          <DeleteBtn text="delete question" />
          <SuccessBtn />
        </div>
      </InputSection>
    </>
  );
}
