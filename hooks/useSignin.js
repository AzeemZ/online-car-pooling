import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export function useSignin() {
  const router = useRouter();
  const [values, setValues] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    unknown: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });

    setErrors((prevErrors) => ({
      ...prevErrors,
      [e.target.name]: "",
      unknown: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/auth/signin", values);
      router.replace("/", "/");
    } catch (err) {
      err?.response.data.errors.map(({ message, field }) => {
        const type = field ?? "unknown";

        setErrors((prevErrors) => ({ ...prevErrors, [type]: message }));
      });
    }
  };

  return { values, errors, handleChange, handleSubmit };
}
