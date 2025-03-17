import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Navbar = () => {
	const {store, dispatch} =useGlobalReducer()

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					<Link to="/contactInput">
						<button 
							className="btn btn-primary"
							onClick={()=>{
								const emptyContact= {
									id:0,
									name:"",
									phone:"",
									email:"",
									address:"",
								  };

								dispatch({
									type:"set_single_contact",
									payload:{ contactData:emptyContact, newContactStatus:true }
								})
							}}
						>
							new contact
						</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};