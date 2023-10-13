import React from "react";
import styles from "./SendMessage.module.css";
import { useParams } from "react-router-dom";
import profilePic from '../../img/avatar.png'
import { useFormik } from "formik";
import axios from "axios";

export default function SendMessage() {

  let x = useParams();
    async function addMessage(values){
            const data ={
                ...values,
                receivedid:x.id
            }
        let res = await axios.post("https://sara7aiti.onrender.com/api/v1/message",data)
            console.log(res)
        }

    let formik = useFormik({
        initialValues:{
            messageContent:""
        },
        onSubmit:(values)=>{
            addMessage(values)
        }
    })

  return (
    <>
      <div className="container text-center py-5 my-5 text-center">
        <div className="card py-5 mb-5">
          <a href data-toggle="modal" data-target="#profile">
            <img src={profilePic} className="avatar " alt />
          </a>
          <h3 className="py-2">Ehab Mohamed</h3>
          <div className="container w-50 m-auto">
            <form onSubmit={formik.handleSubmit}>
              <textarea
                className="form-control"
                name="messageContent"
                value={formik.values.messageContent}
                onChange={formik.handleChange}
                id
                cols={10}
                rows={9}
                placeholder="You cannot send a Sarahah to yourself, share your profile with your friends :)"
                defaultValue={""}
              />
              <button className="btn btn-outline-info mt-3" type="submit">
                <i className="far fa-paper-plane" /> Send
              </button>
            </form>
          </div>
        </div>
        <button
          data-toggle="modal"
          data-target="#share"
          className="btn btn-default-outline share "
        >
          <i className="fas fa-share-alt" /> Share Profile
        </button>
      </div>
    </>
  );
}
