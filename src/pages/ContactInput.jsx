import React, { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";
import { handleSubmitNewContact,handleSubmitUpdateContact } from "../api.js";
export const ContactInput = () => {
  const { store, dispatch } = useGlobalReducer();

  const [name, setName] = useState(store.singleContact?.name);
  const [phone, setPhone] = useState(store.singleContact?.phone);
  const [email, setEmail] = useState(store.singleContact?.email);
  const [address, setAddress] = useState(store.singleContact?.address);

  const contanctInputState = {
   id:store.singleContact?.id,
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
      {store?.newContact ? 
      <button onClick={ ()=>handleSubmitNewContact(dispatch,store,contanctInputState)}>Submit New Contact</button>
      :
      <button onClick={ ()=>handleSubmitUpdateContact(dispatch,store,contanctInputState)}>Update Contact</button>
      
      }
      </Link>
    </div>
  );
};
