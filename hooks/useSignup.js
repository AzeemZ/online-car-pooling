import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export function useSignup() {
  const router = useRouter();
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNo: "",
    gender: "",
    role: "",
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNo: "",
  });

  const handleChange = (e) => {
    setValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [e.target.name]: "",
    }));
  };

  const handleRadioChange = (value) => {
    if (value === "M" || value === "F") {
      return setValues((prevValues) => ({ ...prevValues, gender: value }));
    }

    setValues((prevValues) => ({ ...prevValues, role: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/auth/signup", values);
      router.replace("/", "/");
    } catch (err) {
      err?.response.data.errors.map(({ message, field }) => {
        setErrors((prevErrors) => ({ ...prevErrors, [field]: message }));
      });
    }
  };

  return { values, errors, handleChange, handleRadioChange, handleSubmit };
}
