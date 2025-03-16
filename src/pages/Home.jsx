import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import { ContactInput } from "../components/ContactInput.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, {useEffect} from 'react';

export const Home = () => {

	const {store, dispatch} =useGlobalReducer()
	
	useEffect(()=>{
		dispatch({type:"get_contacts"})
	},[])
	console.log(store?.contactList,"store")

	return (
		<div className="text-center mt-5">
			<ContactInput />
			{store?.contactList.length > 0 && store?.contactList ? 
			store?.contactList.map((contact)=>{
				return(
					<div>
						name: {contact.name}
						address: {contact.address}
						phone: {contact.phone}
						email: {contact.email}
					</div>
				)
			})
			:"no contacts"}
		</div>
	);
}; 