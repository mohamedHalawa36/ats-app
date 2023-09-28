import { Input } from "antd";

export default function TextInput() {
  return (
      <Input
        style={{
          fontSize:"14px",
          color: "var(--mainTextColor)",
          padding: "23px 26px",
          border: "1px solid var(--mainTextColor)",
        }}
        placeholder={`Type here`}
        className="text-input"
      />
  );
}
