
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PersonalInfo from "./Pages/PersonalInfo/PersonalInfo";
import AdditionalInfo from "./Pages/AdditionalInfo/AdditionalInfo";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PersonalInfo />} />

        <Route path="/additional-info" element={<AdditionalInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
