import React, { useContext, useEffect, useState } from "react";
import profilePic from '../../img/avatar.png'
import axios from "axios";
import { Link } from "react-router-dom";
import { tokenContext } from "../../Context/tokenContext";
import jwtDecode from "jwt-decode";
export default function Profile() {
const [userId,setUserId] = useState("");
    const [allMessages,setAllMessages]=useState([]);
async function getMessages(){
 let {data}=   await axios.get("https://sara7aiti.onrender.com/api/v1/message" ,{
        headers:{
            token: localStorage.getItem("userToken")
        }
});
console.log(data)
setAllMessages(data.allMessages)
}

function getUserId(){
 let decoded = jwtDecode(localStorage.getItem("userToken"));
 console.log(decoded);
 setUserId(decoded.id);
}

useEffect(()=>{
    getMessages();
    getUserId();
},[])
  return (
    <>
      <div className="container text-center py-5 my-5 text-center">
        <div className="card pt-5">
          <a href data-toggle="modal" data-target="#profile">
            <img src={profilePic} className="avatar" alt />
          </a>
          <h3 className="py-2">Ehab Mohamed</h3>
          <Link
           to={"/message/"+ userId}
            data-toggle="modal"
            data-target="#share"
            className="btn btn-default-outline share "
          >
            <i className="fas fa-share-alt" /> Share Profile
          </Link>
        </div>
      </div>
      <div class="container text-center my-5 text-center">
        <div class="row">
            {allMessages.length === 0 ?   <div class="col-md-12">
                <div class="card py-5">
                    <p>You don't have any messages... </p>
                </div>
            </div> : "hello" }
          
        </div>
    </div>
    </>
  );
}
