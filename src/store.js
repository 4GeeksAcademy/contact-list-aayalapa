export const initialStore=()=>{
  return{
    agendaStatus:false,
    contactList:[]
  }
}

export default function storeReducer(store, action = {}) {
  const contactUrl = "https://playground.4geeks.com/contact/";


 if(action.type == "create_agenda"){

  const { slug } = action.payload;

  const opt={
    method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "slug": slug ,
    "id": 0
  })

  }
  fetch(contactUrl+"agendas/" + slug, opt)
  .then((resp)=>resp.json())
  .then((data)=> console.log("create agenda: ", data))
  return{
    ...store,
    agendaStatus:true,
  }
 }
 if(action.type == "create_contact"){

  const { contact_data } = action.payload;

  const opt={
    method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(contact_data)

  }
  
  fetch(contactUrl+"agendas/" + slug+"/contacts", opt)
  .then((resp)=>resp.json())
  .then((data)=> console.log("create contact: ", data))
  return{
    ...store,
    contactList:[...contactList,contact_data]
  }
 }
 if(action.type == "get_contacts"){
  fetch(contactUrl+"agendas/aayalapa/contacts")
  .then((resp)=>resp.json())
  .then((data)=>{
    return{
      ...store,
      contactList:data.contacts
    }
  })
 }



 
  // switch(action.type){
  //   case 'add_task':

  //     const { id,  color } = action.payload

  //     return {
  //       ...store,
  //       todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
  //     };
  //   default:
  //     throw Error('Unknown action.');
  // }    
}
