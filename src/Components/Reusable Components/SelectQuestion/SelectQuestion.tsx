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
    <>
      <QuestionsBox title="question">
        <InputSection title="type">
          <TypeSelect />
        </InputSection>
      </QuestionsBox>
      <QuestionsBox title="paragraph question">
        <TextInput />
      </QuestionsBox>
      <QuestionsBox title="multiple choice question">
        <MultChoiceQ />
      </QuestionsBox>
      <QuestionsBox title="dropdown question">
        <MultChoiceQ />
      </QuestionsBox>
      <QuestionsBox title="yes/no question">
        <YesNoQ />
      </QuestionsBox>
    </>
  );
}
