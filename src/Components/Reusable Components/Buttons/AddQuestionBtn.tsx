import { PlusOutlined } from "@ant-design/icons";

export default function AddQuestionBtn() {
  return (
    <button
      style={{
        backgroundColor: "transparent",
        border: "none",
        display: "flex",
        alignItems: "center",
        color: "var(--mainTextColor)",
        fontSize: "18px",
        fontWeight: "600",
        marginTop:"30px"
      }}
    >
      <PlusOutlined
        style={{ fontSize: "25px", marginRight: "12px", fontWeight: "800" }}
      />{" "}
      Add a question
    </button>
  );
}
