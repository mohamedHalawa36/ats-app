import { Switch } from "antd";
import Checkbox from "antd/es/checkbox/Checkbox";
import "../personalQuestion/personalQuestion.css"
import { useAppDispatch, useAppSelector } from "../../../Store/Store";
import {  setMandatory, setShow } from "../../../Store/Slices/appFormSlice";
type profileQuestionProps = {
  title: string;
  checkboxType: string;
  addtionalTips?: string;
  question: string;
};
export default function ProfileQuestion({
  title,
  addtionalTips,
  checkboxType,
  question,
}: profileQuestionProps) {
  const settings = useAppSelector(
    (state) => state.appform.data.attributes.profile[question]
  );
  const dispatch = useAppDispatch();
  function checkType(data: ProfileInfo | Question[]) {
    if ( "mandatory" in data) {
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
          checked={data?.mandatory}
          onClick={() =>
            dispatch(
              setMandatory({ question, mandatory: !data?.mandatory })
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
            onClick={() => dispatch(setShow({ question, show: !data?.show ,type:"profile"}))}
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
