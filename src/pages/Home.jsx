import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import { ContactInput } from "../components/ContactInput.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, {useEffect} from 'react';

export const Home = () => {

	const {store, dispatch} =useGlobalReducer()
	
	useEffect(()=>{
		const fetchContacts = ()=>{
			fetch(store?.contactUrl+"agendas/aayalapa/contacts")
			.then((resp)=>resp.json())
			.then((data)=>{
				dispatch({ type: "set_contacts", payload: data.contacts }); 
			})
			.catch((error) => console.error("Error fetching contacts:", error));
		}
		fetchContacts();
	},[])


	return (
		<div className="text-center mt-5">
		
			{store?.contactList.length > 0 && store?.contactList ? 
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