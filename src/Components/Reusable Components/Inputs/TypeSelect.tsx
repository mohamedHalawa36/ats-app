import { Select } from "antd";
import "./typeSelect.css";
import TextInput from "./TextInput";
import MultChoiceQ from "../Question Types/MultChoiceQ";
import YesNoQ from "../Question Types/YesNoQ";
import QuestionsBox from "../questionsBox/QuestionsBox";

export default function TypeSelect() {
  return (
    <>
      <Select
        defaultValue="Paragraph"
        style={{
          width: "100%",
          borderRadius: "5px",
          fontSize: "14px",
          height: "68px",
        }}
        options={[
          { value: "Paragraph", label: "paragraph" },
          { value: "ShortAnswer", label: "short answer" },
          { value: "YesNo", label: "yes/no" },
          { value: "Dropdown", label: "dropdwon" },
          { value: "MultipleChoice", label: "multiple choice" },
          { value: "Date", label: "date" },
          { value: "Number", label: "number" },
          { value: "FileUpload", label: "file upload" },
          { value: "VideoQuestion", label: "video question" },
        ]}
      />
     
    </>
  );
}
