import React from "react";
import styles from "./Register.module.css";
import { useFormik } from "formik";
export default function Register() {
  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      age: 0,
    },
    onSubmit: (values) => {
      console.log("hello",values);
    },
  });

  return (
    <div className="w-50 mx-auto my-5">
      <h3 className="text-center">Register</h3>

      <form onSubmit={formik.handleSubmit}>
        <div className="form-group mb-3">
        <label htmlFor="name">userName</label>
          <input
            type="text"
            id="name"
            className="form-control"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
        </div>
        <div className="form-group mb-3">
        <label htmlFor="email">userEmail</label>
          <input
            type="email"
            id="email"
            className="form-control"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </div>
        <div className="form-group mb-3">
        <label htmlFor="password">password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="rePassword">rePassword</label>
          <input
            type="password"
            id="rePassword"
            className="form-control"
            name="rePassword"
            value={formik.values.rePassword}
            onChange={formik.handleChange}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="age">age</label>
          <input
            type="number"
            id="age"
            className="form-control"
            name="age"
            value={formik.values.age}
            onChange={formik.handleChange}
          />
        </div>
        <div>
          <button type="submit" className="btn btn-default-outline d-block mx-auto">
              <i className="far fa-edit" /> Register
            </button>
          </div>
      </form>
    </div>
  );
}
