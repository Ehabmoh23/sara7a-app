import React from "react";
import styles from "./SendMessage.module.css";
import { useParams } from "react-router-dom";
import profilePic from '../../img/avatar.png'
export default function SendMessage() {
  let x = useParams();
  console.log(x);
  return (
    <>
      <div className="container text-center py-5 my-5 text-center">
        <div className="card py-5 mb-5">
          <a href data-toggle="modal" data-target="#profile">
            <img src={profilePic} className="avatar " alt />
          </a>
          <h3 className="py-2">Nourhan Saeed</h3>
          <div className="container w-50 m-auto">
            <form action method="post">
              <textarea
                className="form-control"
                name
                id
                cols={10}
                rows={9}
                placeholder="You cannot send a Sarahah to yourself, share your profile with your friends :)"
                defaultValue={""}
              />
              <button className="btn btn-outline-info mt-3">
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
