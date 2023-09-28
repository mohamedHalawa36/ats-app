import { useAppSelector } from "../../Store/Store";
import AddedQ from "../Reusable Components/AddedQuestion/AddedQ";
import AddQuestionBtn from "../Reusable Components/Buttons/AddQuestionBtn";
import PersonalQuestion from "../Reusable Components/personalQuestion/PersonalQuestion";
import QuestionsBox from "../Reusable Components/questionsBox/QuestionsBox";

export default function PersonalQSection() {
  const customizedQuestions = useAppSelector(
    (state) =>
      state.appform.data.attributes.personalInformation.personalQuestions
  );
  return (
    <QuestionsBox title="personal information">
      <PersonalQuestion
        title="first name"
        checkboxType="internal"
        question="firstName"
      />
      <PersonalQuestion
        title="last name"
        checkboxType="internal"
        question="lastName"
      />
      <PersonalQuestion
        title="email"
        checkboxType="internal"
        question="emailId"
      />
      <PersonalQuestion
        title="phone"
        addtionalTips="without dial code"
        question="phoneNumber"
        checkboxType="internal"
      />
      <PersonalQuestion
        title="nationality"
        checkboxType="internal"
        question="nationality"
      />
      <PersonalQuestion
        title="current residence"
        checkboxType="internal"
        question="currentResidence"
      />
      <PersonalQuestion
        title="ID Number"
        checkboxType="internal"
        question="idNumber"
      />
      <PersonalQuestion
        title="date of birth"
        checkboxType="internal"
        question="dateOfBirth"
      />
      <PersonalQuestion
        title="gender"
        checkboxType="internal"
        question="gender"
      />
      <div className="personal-customizedQ">
        {customizedQuestions.map((question) => (
          <AddedQ questionObj={question}  key={question.id} />
        ))}
      </div>
      <AddQuestionBtn />
    </QuestionsBox>
  );
}
