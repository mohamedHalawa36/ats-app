import { useAppSelector } from "../../Store/Store";
import AddedQ from "../Reusable Components/AddedQuestion/AddedQ";
import AddQuestionBtn from "../Reusable Components/Buttons/AddQuestionBtn";
import ProfileQuestion from "../Reusable Components/profileQuestion/ProfileQuestion";
import QuestionsBox from "../Reusable Components/questionsBox/QuestionsBox";

export default function ProfileQSection() {
  const customizedQuestions = useAppSelector(
    (state) =>
      state.appform.data.attributes.profile.profileQuestions
  );
  return (
    <QuestionsBox title="profile">
      <ProfileQuestion
        title="education"
        checkboxType="mandatory"
        question="education"
      />
      <ProfileQuestion
        title="experience"
        checkboxType="mandatory"
        question="experience"
      />
      <ProfileQuestion
        title="resume"
        checkboxType="mandatory"
        question="resume"
      />
     
      <div className="personal-customizedQ">
        {customizedQuestions.map((question) => (
          <AddedQ questionObj={question} key={question.id} />
        ))}
      </div>
      <AddQuestionBtn />
    </QuestionsBox>
  );
}
