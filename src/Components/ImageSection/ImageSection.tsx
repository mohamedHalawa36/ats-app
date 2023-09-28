import { useAppSelector } from "../../Store/Store";
import ImageUploader from "../Reusable Components/Question Types/ImageUploader";
import UploadedImg from "../uploaded image/UploadedImg";

export default function ImageSection() {
  const coverImage = useAppSelector(
    (state) => state.appform.data.attributes.coverImage
  );
  if (coverImage.length > 0) return <UploadedImg />;
  else return <ImageUploader />;
}
