import "./addedQ.css";
import { EditOutlined } from "@ant-design/icons";
type AddedQProps={
  questionObj:Question
}
export default function AddedQ({questionObj}:AddedQProps) {
  const {type,question} = questionObj
  return (
    <div className="addedQ-container">
      <p className="addedQ-type">{type}</p>
      <div className="addedQ-content">
        <p className="addedQ-text">
          {question}
        </p>
        <span className="addedQ-editIcon">
          <EditOutlined />
        </span>
      </div>
    </div>
  );
}
