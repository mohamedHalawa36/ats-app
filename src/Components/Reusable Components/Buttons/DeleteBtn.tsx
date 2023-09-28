import CloseOutlined from "@ant-design/icons/CloseOutlined";
type DeleteBtnProps = {
  text:string,
  handleClick?:()=>void
}
export default function DeleteBtn({text,handleClick}:DeleteBtnProps) {
  return (
    <button onClick={handleClick} style={{backgroundColor:"transparent",border:"none",display:"flex",alignItems:"center",textTransform:"capitalize", color: "var(--deleteBtnColor)",fontSize:"15px",fontWeight:"600",cursor:"pointer" }}>
      <CloseOutlined style={{fontSize:"25px",marginRight:"12px",fontWeight:"800"}} /> {text}
    </button>
  );
}
