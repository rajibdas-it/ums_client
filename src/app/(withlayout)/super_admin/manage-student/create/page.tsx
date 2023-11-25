"use client";
import StepperForm from "@/components/StepperForm/StepperForm";
import BasicInfo from "@/components/StudentsForm/BasicInfo";
import GuardianInfo from "@/components/StudentsForm/GuardianInfo";
import LocalGuardInfo from "@/components/StudentsForm/LocalGuardInfo";
import StudentInfo from "@/components/StudentsForm/StudentInfo";
import React from "react";

const CreateStudentPage = () => {
  const steps = [
    {
      title: "Student Information",
      content: <StudentInfo />,
    },
    {
      title: "Basic Information",
      content: <BasicInfo />,
    },
    {
      title: "Guardian Infromation",
      content: <GuardianInfo />,
    },
    {
      title: "Local Guardian Infromation",
      content: <LocalGuardInfo />,
    },
  ];

  const handleStudentSubmit = async (data: any) => {
    try {
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h1>Create New Student</h1>
      <StepperForm
        submitHandler={(value) => handleStudentSubmit(value)}
        steps={steps}
      />
    </div>
  );
};

export default CreateStudentPage;
