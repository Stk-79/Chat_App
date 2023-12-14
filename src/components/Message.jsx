import React from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {

  const {currentUser}=useContext(AuthContext)
  const {data}=useContext(ChatContext)
  console.log(message);
  return (
    <div className="message owner">
      {/* <div className="messageInfo">
        <img
          src={}
          alt=""
        ></img>
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        <img src="https://images.pexels.com/photos/1374509/pexels-photo-1374509.jpeg?auto=compress&cs=tinysrgb&w=600"></img>
      </div> */}
    </div>
  );
};

export default Message;
