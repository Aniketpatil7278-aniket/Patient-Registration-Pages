import * as Yup from "yup";

export const additionalInfoSchema = Yup.object({
  height: Yup.number()
    .typeError("Height must be a number")
    .min(50, "Height should be at least 50 cm")
    .max(250, "Height should not exceed 250 cm"),

  weight: Yup.number()
    .typeError("weight must be a number")
    .positive("Weight must be positive")
    .min(2, "Weight should be between 2 kg and 500 kg")
    .max(500, "Weight should be between 2 kg and 500 kg"),

  bloodPressure: Yup.string().matches(
    /^\d{2,3}\/\d{2,3}$/,
    "Enter blood pressure in the format: 120/80 mmHg",
  ),

  bloodSugar: Yup.number()
    .typeError("Blood sugar must be a number")
    .min(0, "Blood sugar cannot be negative"),

  physicalActivity: Yup.string().required("Please select your activity level."),

  dietaryPreference: Yup.string().required(
    "Please select a valid dietary preference.",
  ),

  smokingStatus: Yup.string().required("Please select a valid smoking status."),

  alcoholConsumption: Yup.string().required(
    "Please select a valid alcohol consumption preference.",
  ),

  emergencyRelationship: Yup.string().required(
    "Please select your relationship with the emergency contact.",
  ),

  emergencyNumber: Yup.string()
    .required("Phone number is required")
    .matches(/^[0-9]{10}$/, "Please enter a valid 10-digit phone number."),
});
