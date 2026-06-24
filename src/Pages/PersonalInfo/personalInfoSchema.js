import * as Yup from "yup";

export const personalInfoSchema = Yup.object({
  fullName: Yup.string().required("Please enter your full name!"),

  dob: Yup.date()
    .max(new Date(), "Future date not allowed!")
    .required("Please enter your Date of Birth!"),

  phoneNumber: Yup.string().matches(/^[0-9]{10}$/, "Enter valid mobile number"),

  email: Yup.string().email("Enter a valid email address"),

  gender: Yup.string().required("Please select your gender!"),

  bloodGroup: Yup.string().required("Please select blood group!"),

  state: Yup.string().required("please select your state!"),

  city: Yup.string().required("please select your city!"),
});
