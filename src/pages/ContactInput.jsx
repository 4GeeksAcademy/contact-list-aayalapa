import React, { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";
import { handleSubmit } from "../api.js";

export const ContactInput = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const { store, dispatch } = useGlobalReducer();

 const contanctInputState = {
  name:name,
  setName:setName,
  phone:phone,
  setPhone:setPhone,
  email:email,
  setEmail:setEmail,
  address:address,
  setAddress:setAddress,
 }



  return (
    <div>
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="tel"
        placeholder="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <Link to={"/"}>
        <button onClick={ ()=>handleSubmit(dispatch,store,contanctInputState)}>Submit</button>
      </Link>
    </div>
  );
};
