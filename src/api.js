

const contactUrl = "https://playground.4geeks.com/contact/";


export const createAgenda = ()=>{
    const opt={
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "slug": "alexAyala" ,
            "id": 0
        })
        
    }
    fetch(contactUrl+"agendas/alexAyala" , opt)
    .then((resp)=>resp.json())
    .then((data)=> console.log("create agenda: ", data))
}

export const fetchContacts = (dispatch)=>{
    fetch(contactUrl+"agendas/alexAyala/contacts")
    .then((resp)=>resp.json())
    .then((data)=>{
        
        if(data.detail){
            const noAgenda = data.detail.includes("doesn't");
            if(noAgenda){
                createAgenda();
                dispatch({ type: "set_contacts", payload: data.contacts }); 
            }
        }
        else{
            dispatch({ type: "set_contacts", payload: data.contacts }); 
        }
    })
    .catch((error) => console.error("Error fetching contacts:", error));
}

 export const handleSubmitNewContact = async (dispatch,store,contactInputState) => {
    
     const contactObj = {
        name:contactInputState.name,
        phone:contactInputState.phone,
        email:contactInputState.email,
        address:contactInputState.address,
      };

      const response = await fetch(
        store.contactUrl + "agendas/alexAyala/contacts",
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

    
        dispatch({
          type: "set_contacts",
          payload: [...store.contactList, contactObj],
        });

    
        contactInputState.setName("");
        contactInputState.setPhone("");
        contactInputState.setEmail("");
        contactInputState.setAddress("");
      
   
  };
 export const handleSubmitUpdateContact = async (dispatch,store,contactInputState) => {
    
     const contactObj = {
        name:contactInputState.name,
        phone:contactInputState.phone,
        email:contactInputState.email,
        address:contactInputState.address,
      };
// /agendas/{slug}/contacts/{contact_id}
      const response = await fetch(
        store.contactUrl + "agendas/alexAyala/contacts/"+contactInputState.id,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contactObj),
        }
      );

      const data = await response.json();
      console.log("update contact: ", data);

    
        dispatch({
          type: "set_contacts",
          payload: [...store.contactList, contactObj],
        });

    
        contactInputState.setName("");
        contactInputState.setPhone("");
        contactInputState.setEmail("");
        contactInputState.setAddress("");
      
   
  };