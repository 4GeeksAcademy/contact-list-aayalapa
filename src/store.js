export const initialStore=()=>{
  return{
    agendaStatus:false,
    contactList:[],
    singleContact:{
      id:0,
      name:"",
      phone:"",
      email:"",
      address:"",
    },
    contactUrl:"https://playground.4geeks.com/contact/"
  }
}

export default function storeReducer(store, action = {}) {


 

 if (action.type == "set_contacts") {
  return {
    ...store,
    contactList: action.payload
  };
}

 if (action.type == "set_single_contact") {
  const {contactData} = action.payload;

  return {
    ...store,
    singleContact: contactData
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
