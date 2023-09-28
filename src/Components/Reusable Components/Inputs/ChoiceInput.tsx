import { Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { UnorderedListOutlined } from "@ant-design/icons";
export default function ChoiceInput() {
  return (
    <div style={{ display: "flex", alignItems: "center",marginBottom:"20px" }}>
      <UnorderedListOutlined
        style={{ fontSize: "20px", marginRight: "10px" }}
      />
      <Input
        style={{
          width: "441px",
          color: "var(--placeholderColor)",
          padding: "18px 23px",
          border: "1px solid var(--choiceBorderColor)",
        }}
        placeholder={`Type here`}
        className="text-input"
      />
      <PlusOutlined style={{ fontSize: "20px", marginLeft: "16px" }} />
    </div>
  );
}
