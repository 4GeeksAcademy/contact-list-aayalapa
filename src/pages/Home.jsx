
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, {useEffect} from 'react';
import { fetchContacts } from "../api.js";
import { Link } from "react-router-dom";
import { handleDeleteContact } from "../api.js";


export const Home = () => {

	const {store, dispatch} =useGlobalReducer()
	
	useEffect(()=>{
		
		fetchContacts(dispatch);

	},[])


	return (
		<div className="text-center mt-5">
		
			{store?.contactList && store?.contactList.length > 0  ? 
			store?.contactList.map((contact)=>{
				return(
					<div key={contact.id+"contact"} className="bg-secondary m-2"> 
						<div className="m-2 border">

						name: {contact.name}
						</div>
						<div className="m-2 border">
						address: {contact.address}

						</div>
						<div className="m-2 border">
						phone: {contact.phone}

						</div>
						<div className="m-2 border">
						email: {contact.email}

						</div>
						<div className=" m-auto">
							<Link to={"/contactInput"}>
								<button
								 className="bg-white"
								 onClick={()=> dispatch({
									type:"set_single_contact",
									payload:{contactData:contact, newContactStatus:false}
								 })}
								>
									Edit
								</button>
							</Link>
							<button 
								className="bg-danger"
								onClick={()=> handleDeleteContact(contact.id)}
							>
								Delete
							</button>
						</div>
					</div>
				)
			})
			:"no contacts"}
		</div>
	);
}; 