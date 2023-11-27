import React, { useState } from "react"; 
import validator from 'validator';
import './App.css';
import background from "./bg.jpg";
const App = () => { 

	const [errorMessage, setErrorMessage] = useState('') 

	const validate = (value) => { 

		if (validator.isStrongPassword(value, { 
			minLength: 8, minLowercase: 1, 
			minUppercase: 1, minNumbers: 1, minSymbols: 1 
		})) { 
			setErrorMessage('Is Strong Password') 
		} else { 
			setErrorMessage('Is Not Strong Password') 
		} 
	} 

	return ( 
		<div style={{ 
			margin: '200px', 
			backgroundColor: "#B6C649",
			padding: "50px",
			textAlign: "center",
			borderRadius: "10px",
			
		}}>

		
			<pre> 
				<h1 style={{color: "#2C4251",  textTransform: "uppercase"}}>Checking Password Strength in ReactJS</h1> 
				
				<span className="formText">Enter Password:</span><input style={{borderRadius:"5px",padding: "7px"}} type="text"
					onChange={(e) => validate(e.target.value)}></input> <br /> 
				{errorMessage === '' ? null : 
					<span style={{ 
						fontWeight: 'bold', 
						color: 'red', 
					}}>{errorMessage}</span>} 
			</pre> 
		</div> 
	); 
} 

export default App
