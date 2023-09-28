import { Switch } from "antd";
import "./personalQuestion.css";
import Checkbox from "antd/es/checkbox/Checkbox";
import { useAppDispatch, useAppSelector } from "../../../Store/Store";
import { setInternalUse, setShow } from "../../../Store/Slices/appFormSlice";
type personQuestionProps = {
  title: string;
  checkboxType: string;
  addtionalTips?: string;
  question: string;
};
export default function PersonalQuestion({
  title,
  addtionalTips,
  checkboxType,
  question,
}: personQuestionProps) {
  const settings = useAppSelector(
    (state) => state?.appform?.data?.attributes?.personalInformation[question]
  );
  const dispatch = useAppDispatch();
  function checkType(data: PersonalInfo | Question[]) {
    if (typeof data === "object" && "internalUse" in data) {
      return data;
    }
  }
  const data = checkType(settings);
  return (
    <div className="personal-field">
      <div className="field-title">
        {title}
        {addtionalTips && (
          <span className="personal-tips">({addtionalTips})</span>
        )}
      </div>
      <div className="checkbox-container">
        <Checkbox
          className="antd-checkbox"
          checked={data?.internalUse}
          onClick={() =>
            dispatch(
              setInternalUse({ question, internalUse: !data?.internalUse })
            )
          }
          style={{ fontSize: "15px", textTransform: "capitalize" }}
        >
          {checkboxType}
        </Checkbox>{" "}
      </div>
      <div className="switch-container">
        <span className="switch">
          <Switch
            style={{ width: "49px", height: "24px" }}
            checked={data?.show}
            onClick={() => dispatch(setShow({ question, show: !data?.show ,type:"personal"}))}
          />
        </span>
        <span className="hide-toggle-label">
          {data?.show ? "Show" : "Hide"}
        </span>
        <span></span>
      </div>
    </div>
  );
}
