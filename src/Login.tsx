import { FC, ReactElement } from "react";
import axios from "axios";
import { useFormik } from "formik";

export const Login: FC = (): ReactElement => {
  const formik = useFormik({
    initialValues: {
      email: "",
      firstname: "",
      lastname: "",
      password: "",
    },
    onSubmit: (e): void => {
      const headers = {
        "Content-Type": "application/x-www-form-urlencoded'",
        "Access-Control-Allow-Origin": "*",
      };
      axios.post("localhost:3030/signup", formik.values, { headers }).then(
        (resp) => {
          console.log(resp);
        },
        (error) => {
          console.log(error);
        }
      );
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstname">First Name</label>
      <input
        name="firstname"
        id="firstname"
        type="firstname"
        onChange={formik.handleChange}
        value={formik.values.firstname}
      />
      <label htmlFor="lastname">First Name</label>
      <input
        name="lastname"
        id="lastname"
        type="lastname"
        onChange={formik.handleChange}
        value={formik.values.lastname}
      />
      <label htmlFor="email">First Name</label>
      <input
        name="email"
        id="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <label htmlFor="Password"> Password</label>
      <input
        name="password"
        id="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <button type="submit"> Submit </button>
    </form>
  );
};
