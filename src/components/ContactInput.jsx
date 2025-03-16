	// {
	// 	"name": "string",
	// 	"phone": "",
	// 	"email": "",
	// 	"address": ""
	//   }
    import React, {useState} from 'react'
    import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const ContactInput = () => {
const [name,setName]=useState("")
const [phone,setPhone]=useState("")
const [email,setEmail]=useState("")
const [address,setAddress]=useState("")
const {store, dispatch} =useGlobalReducer()

const contactObj = {
    name:name,
    phone:phone,
    email:email,
    address:address,
}

    return(
	<div>
        <input 
            type="text"
            placeholder="name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
        />
        <input 
            type="tel" 
            placeholder="phone"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
        />
        <input 
            type="email"
            placeholder="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
        />
        <input 
            type="text"
            placeholder="address"
            value={address}
            onChange={(e)=>setAddress(e.target.value)}
        />
        <button
            onClick={()=> dispatchEvent({
                type:"create_contact",
                payload:{contact_data: contactObj}
            })}
        >
            submit
        </button>
    </div>
    );
}