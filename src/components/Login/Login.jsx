import React, { useContext, useState } from "react";
import styles from './Login.module.css';
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from 'axios';
import { tokenContext } from "../../Context/tokenContext";
export default function Login()  {
    let navigate = useNavigate();
    const[isLoading,setIsLoading] = useState(false);
    const[apiError,setApiError] = useState("");
    let {setToken}= useContext(tokenContext);

    function login(values){
        setIsLoading(true);
     axios.post(`https://sara7aiti.onrender.com/api/v1/user/signin`, values).then((data)=>{
        if(data.data.message == "welcome"){
            setIsLoading(false);
            localStorage.setItem("userToken",data.data.token);
            setToken(data.data.token);
            navigate("/profile")
        }
     }).catch((err)=>{
        setApiError(err.response.data.error);
        setIsLoading(false);
     })
    }

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email address').required('email is Required'),
        password: Yup.string().matches(/^[A-Z][a-z0-9]{3,8}$/,"password should start with capital").required('password is Required'),
      });
    

      let formik = useFormik({
        initialValues: {
          email: "",
          password: "",
        },validationSchema,
        onSubmit: (values) => {
            login(values)
        }
      });
      return (
        <div className="w-50 mx-auto my-5">
          <h3 className="text-center">Login</h3>
            {apiError ? <div className="alert alert-danger">{apiError}</div>:""}
          <form onSubmit={formik.handleSubmit}>
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
            <div>
              <button
                type="submit"
                className="btn btn-default-outline d-block mx-auto"
              >
            {isLoading ? <i className="fa fa-spin fa-spinner" /> : <> <i className="far fa-edit" /> Login</>} 
              </button>
            </div>
          </form>
        </div>
      );
}
