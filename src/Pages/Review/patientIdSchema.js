import * as Yup from "yup";

export const patientIdSchema = Yup.object({
  patientId: Yup.string()
    .required("Patient ID is required")
    .min(6, "Patient ID is too short"),

  password: Yup.string()
    .required("Password is required")
    .min(8, "Minimum 8 characters")
    .matches(/[a-z]/, "Must contain lowercase letter")
    .matches(/[A-Z]/, "Must contain uppercase letter")
    .matches(/[0-9!@#$%^&*]/, "Must contain number or symbol"),

  confirmPassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});