import QuestionsBox from "../questionsBox/QuestionsBox";
import TextInput from "../Inputs/TextInput";
import ChoiceInput from "../Inputs/ChoiceInput";
import InputSection from "../Inputs/InputSection";
import TypeSelect from "../Inputs/TypeSelect";
import ParagraphQ from "../Question Types/ParagraphQ";
import MultChoiceQ from "../Question Types/MultChoiceQ";
import YesNoQ from "../Question Types/YesNoQ";

export default function SelectQuestion() {
  return (
    <QuestionsBox title="question">
      <InputSection title="type">
        <TypeSelect />
      </InputSection>
      <InputSection title="question">
        <TextInput />
      </InputSection>
      <InputSection title="choice">
        <ChoiceInput />
      </InputSection>
      <ParagraphQ />
      <MultChoiceQ />
      <YesNoQ />
    </QuestionsBox>
  );
}
