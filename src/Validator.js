import React, {useState} from 'react';
import './Validator.css';

function Validator () {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirm, setPasswordConfirm] =useState("")
  const [passwordMessage, setPasswordMessage] =useState("")
  

  const handleUsernameChange =(event) => {
    // console.log("Something happened inside the username field")
    console.log(event.target.value)
    setUsername(event.target.value)
  }

  const handlePasswordChange =(event) => {
    // console.log("Something happened inside the password field")
    console.log(event.target.value)
    setPassword(event.target.value)
  }

  const handlePasswordConfirm =(event) => {
    // console.log("Something happened in the confirm username field")
    console.log(event.target.value)
    setPasswordConfirm(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("The submit function was run")
    if(password === passwordConfirm){
      setPasswordMessage("valid password")
    }else {
      setPasswordMessage("invalid password")
    }
  }
    
  


    return (
      <div className="form">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Username" id="username" value={username} onChange={handleUsernameChange}/>  
          <label htmlFor="username">Username</label>

          <input type="password" placeholder="Password" id="password" value={password} onChange={handlePasswordChange} />
          <label htmlFor="password">Password</label>

          <input
            type="password"
            placeholder="Confirm password" id="passwordConfirm" value={passwordConfirm} onChange={handlePasswordConfirm}/>
          <label htmlFor="passwordConfirm">Confirm password</label>

          <button type="submit" onChange={handleSubmit}>Sign Up</button>
          <p>{passwordMessage}</p>
          <p>Passwords must match.</p>
        </form>
      </div>
    );
}

export default Validator;
