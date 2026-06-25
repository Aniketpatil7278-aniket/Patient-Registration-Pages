import { BrowserRouter, Routes, Route } from "react-router-dom";
import PersonalInfo from "./Pages/PersonalInfo/PersonalInfo";
import AdditionalInfo from "./Pages/AdditionalInfo/AdditionalInfo";
import MedicalHistory from "./Pages/MedicalHistory/MedicaHistory";
import InsuranceInfo from "./Pages/InsuranceInfo/InsuranceInfo";
import HealthRecords from "./Pages/HealthRecords/HealthRecords";
import Review from "./Pages/Review/Review";
import AccountCreated from "./Pages/AccountCreated/AccountCreated";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PersonalInfo />} />

        <Route
          path="/additional-info"
          element={
              <AdditionalInfo />
          }
        />
        <Route
          path="/medicalhistory"
          element={
              <MedicalHistory />
          }
        />
        <Route
          path="Insurance-info"
          element={
              <InsuranceInfo />
          }
        />
        <Route
          path="/health-record"
          element={
              <HealthRecords />
          }
        />
        <Route
          path="/review"
          element={
              <Review />
          }
        />
        <Route
          path="accountcreated"
          element={
              <AccountCreated />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
