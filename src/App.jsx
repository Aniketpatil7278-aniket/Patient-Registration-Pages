
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PersonalInfo from "./Pages/PersonalInfo/PersonalInfo";
import AdditionalInfo from "./Pages/AdditionalInfo/AdditionalInfo";
import MedicalHistory from "./Pages/MedicalHistory/MedicaHistory";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PersonalInfo />} />

        <Route path="/additional-info" element={<AdditionalInfo />} />
        <Route path="/medicalhistory" element={<MedicalHistory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
