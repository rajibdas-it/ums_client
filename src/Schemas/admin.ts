import * as yup from "yup";

export const adminSchema = yup.object().shape({
  password: yup.string().min(6).max(32).required(""),
  admin: yup.object().shape({
    name: yup.object().shape({
      firstName: yup.string().required("First Name is required"),
      middleName: yup.string().optional(),
      lastName: yup.string().required("Last Name is required"),
    }),
    gender: yup
      .mixed()
      .oneOf(["male", "female", "others"])
      .required("Gender is required"),
    dateOfBirth: yup
      .date()
      .nullable()
      .min(new Date(1900, 0, 1))
      .required("Date of birth is required"),
    email: yup.string().email().required("Email is required"),
    contactNo: yup.string().required("Contact no. is required"),
    emergencyContactNo: yup
      .string()
      .required("Emergency Contact no. is required"),
    presentAddress: yup.string().required("Present Address is required"),
    parmanentAddress: yup.string().required("Permanent Address is required"),
    bloodGroup: yup
      .mixed()
      .oneOf(["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"])
      .required("Blood Group is required"),
    managementDepartment: yup.string().required("Department is required"),
    designation: yup.string().required("Designation is required"),
  }),
});
