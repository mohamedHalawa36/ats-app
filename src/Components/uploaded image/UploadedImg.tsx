import DeleteBtn from "../Reusable Components/Buttons/DeleteBtn";
import "./uploadedImg.css";
import { useAppDispatch, useAppSelector } from "../../Store/Store";
import { deleteImg } from "../../Store/Slices/appFormSlice";

export default function UploadedImg() {
  const coverImage = useAppSelector((state)=>state.appform.data.attributes.coverImage)
const dispatch = useAppDispatch()
  return (
    <div className="uploadedImg-container">
      <div className="uploadedImg-image">
        <img src={coverImage} alt="Cover image" />
      </div>
      <div className="uploadedImg-footer">
        <DeleteBtn handleClick={()=>dispatch(deleteImg())} text="delete & re-upload " />
      </div>
    </div>
  );
}
