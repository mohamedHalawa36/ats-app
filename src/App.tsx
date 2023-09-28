import ImageUploader from "./Components/Reusable Components/Question Types/ImageUploader";
import SelectQuestion from "./Components/Reusable Components/SelectQuestion/SelectQuestion";
import "antd/dist/reset.css";
import UploadedImg from "./Components/uploaded image/UploadedImg";
import Sidebar from "./Components/Sidebar/Sidebar";
import Navbar from "./Components/Navbar/Navbar";
import PersonalQSection from "./Components/PersonalQSection/PersonalQSection";
import { useEffect } from "react";
import { getAppForm } from "./Store/Slices/appFormSlice";
import { useAppDispatch, useAppSelector } from "./Store/Store";
import ProfileQSection from "./Components/ProfileQSection/ProfileQSection";
import ImageSection from "./Components/ImageSection/ImageSection";
function App() {
  const dispatch =useAppDispatch()
  const state = useAppSelector((state)=>state.appform)
  useEffect(()=>{
dispatch(getAppForm())
  },[dispatch])
  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        <Navbar />
        <div className="appForm">
          <ImageSection/>
         <PersonalQSection/>
         <ProfileQSection/>
          <SelectQuestion />
        </div>
      </main>
    </div>
  );
}

export default App;
