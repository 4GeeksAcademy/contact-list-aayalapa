export const initialStore=()=>{
  return{
    agendaStatus:false,
    contactList:[],
    contactUrl:"https://playground.4geeks.com/contact/"
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
 

 if (action.type == "set_contacts") {
  return {
    ...store,
    contactList: action.payload
  };
}

return store;
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
//}
