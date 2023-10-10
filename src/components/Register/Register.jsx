import React, { useState } from "react";
import styles from "./Register.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
export default function Register() {
    let navigate = useNavigate();
    const[isLoading,setIsLoading] = useState(false);
    const[apiError,setApiError] = useState("");
    
  
     function register(values){
        setIsLoading(true);
     axios.post(`https://sara7aiti.onrender.com/api/v1/user`, values).then((data)=>{
        if(data.data.message == "Added"){
            setIsLoading(false);
            navigate("/login")
        }
     }).catch((err)=>{
        setApiError(err.response.data.error);
        setIsLoading(false);
     })
    }

  const validationSchema = Yup.object({
    name: Yup.string()
      .max(15, "Must be 15 characters or less")
      .min(3, "Must be 3 characters or more")
      .required("name is Required"),
    email: Yup.string().email('Invalid email address').required('email is Required'),
    password: Yup.string().matches(/^[A-Z][a-z0-9]{3,8}$/,"password should start with capital").required('password is Required'),
    rePassword: Yup.string().oneOf([Yup.ref("password")]).required('rePassword is Required'),
    age: Yup.number().required("is requried").positive().integer(),
  });

  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      age: 0,
    },validationSchema,
    onSubmit: (values) => {register(values)}
  });

  return (
    <div className="w-50 mx-auto my-5">
      <h3 className="text-center">Register</h3>
        {apiError ? <div className="alert alert-danger">{apiError}</div>:""}
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
            onBlur={formik.handleBlur}
          />
            {formik.errors.name && formik.touched.name ? <div className="alert alert-danger">{formik.errors.name}</div> : ""}
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
            onBlur={formik.handleBlur}

          />
            {formik.errors.email && formik.touched.email ? <div className="alert alert-danger">{formik.errors.email}</div> : ""}

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
            onBlur={formik.handleBlur}

          />
            {formik.errors.password && formik.touched.password ? <div className="alert alert-danger">{formik.errors.password}</div> : ""}

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
            onBlur={formik.handleBlur}

          />
            {formik.errors.rePassword && formik.touched.rePassword ? <div className="alert alert-danger">{formik.errors.rePassword}</div> : ""}
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
            onBlur={formik.handleBlur}

          />
            {formik.errors.age && formik.touched.age ? <div className="alert alert-danger">{formik.errors.age}</div> : ""}
        </div>
        <div>
          <button
            type="submit"
            className="btn btn-default-outline d-block mx-auto"
          >
        {isLoading ? <i className="fa fa-spin fa-spinner" /> : <> <i className="far fa-edit" /> Register</>} 
          </button>
        </div>
      </form>
    </div>
  );
}
