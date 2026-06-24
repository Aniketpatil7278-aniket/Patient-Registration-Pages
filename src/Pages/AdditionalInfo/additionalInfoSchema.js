import * as Yup from "yup";

export const additionalInfoSchema = Yup.object({
  height: Yup.string().required("Height is required"),
  weight: Yup.string().required("Weight is required"),
  emergencyRelationship: Yup.string().required("Relationship is required"),
  emergencyNumber: Yup.string()
    .matches(/^[0-9]{10}$/, "Enter valid phone number")
    .required("Emergency number is required"),
});
