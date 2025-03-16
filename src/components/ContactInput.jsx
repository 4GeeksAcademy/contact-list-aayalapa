import React, { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";

export const ContactInput = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const { store, dispatch } = useGlobalReducer();

  const contactObj = {
    name,
    phone,
    email,
    address,
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        store.contactUrl + "agendas/aayalapa/contacts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contactObj),
        }
      );

      const data = await response.json();
      console.log("create contact: ", data);

      // Only update store AFTER successful request
      if (response.ok) {
        dispatch({
          type: "set_contacts",
          payload: [...store.contactList, contactObj],
        });

        // Clear form fields
        setName("");
        setPhone("");
        setEmail("");
        setAddress("");
      }
    } catch (error) {
      console.error("Error creating contact:", error);
    }
  };

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
        <button onClick={handleSubmit}>Submit</button>
      </Link>
    </div>
  );
};
