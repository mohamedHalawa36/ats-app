import { useDropzone, FileWithPath } from "react-dropzone";
import QuestionsBox from "../questionsBox/QuestionsBox";
import { UploadOutlined } from "@ant-design/icons";
import "./imageUploader.css";
import { useAppDispatch } from "../../../Store/Store";
import { setImg } from "../../../Store/Slices/appFormSlice";

function ImageUploader() {
  const dispatch = useAppDispatch()
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    maxFiles: 1, // Allow only one file to be accepted
    accept: { "image/*": [] },
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        const file = acceptedFiles[0];
        const image = URL.createObjectURL(file)
        dispatch(setImg(image))
      }
    },
  });

  const files = acceptedFiles.map((file: FileWithPath) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));
  return (
    <QuestionsBox title="upload cover image">
      <section className="container">
        <div {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />
          <div className="upload-container">
            <UploadOutlined
              style={{ fontSize: "30px", marginBottom: "10px" }}
            />
            <h4 className="uploadTitle">Upload cover image</h4>
            <p className="upload-tips">
              {files.length === 0
                ? "16:9 ratio is recommended. Max image size 1mb"
                : "image uploadd successfully"}
            </p>
          </div>
        </div>
      </section>
    </QuestionsBox>
  );
}

export default ImageUploader;
