import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import { ContactInput } from "./ContactInput.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, {useEffect} from 'react';
import { fetchContacts } from "../api.js";

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
					<div className="bg-secondary m-2"> 
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
					</div>
				)
			})
			:"no contacts"}
		</div>
	);
}; 