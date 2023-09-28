import SelectQuestion from "./Components/Reusable Components/SelectQuestion/SelectQuestion";
import "antd/dist/reset.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Navbar from "./Components/Navbar/Navbar";
import PersonalQSection from "./Components/PersonalQSection/PersonalQSection";
import { useEffect } from "react";
import { getAppForm } from "./Store/Slices/appFormSlice";
import { useAppDispatch } from "./Store/Store";
import ProfileQSection from "./Components/ProfileQSection/ProfileQSection";
import ImageSection from "./Components/ImageSection/ImageSection";
function App() {
  const dispatch =useAppDispatch()
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
