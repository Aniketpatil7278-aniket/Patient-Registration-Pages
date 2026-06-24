import StepSidebar from "../../components/Sidebar/StepSidebar";
import FormHeader from "../../components/Header/FormHeader";

const MedicalHistory=()=>{
    return (
      <div className="flex h-screen bg-[#F8FAFC] overflow-hidden">
        <StepSidebar />

        <div className="flex-1 bg-white px-8 py-6 overflow-auto">
          <FormHeader
            title="Medical History"
            subtitle="Add information about your past treatments, medications, and health conditions."
          />
        </div>
      </div>
    );
}
export default MedicalHistory;