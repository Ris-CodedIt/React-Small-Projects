import { useState } from "react";
import Input from "./Input";
import {hasMinLength, isEmail, isEqualsToOtherValue, isNotEmpty} from "../util/validation"

export default function Login() {

  const [enteredValues, setEnteredValues] = useState({email:"", password:""})
  const [didEdit, setDidEdit] = useState({email:false, password:false})
  

  const emailIsInvalid = didEdit.email  && !isEmail(enteredValues.email) && !isNotEmpty(enteredValues.email)
  const passwordIsInvalid = didEdit.password  &&  !hasMinLength(enteredValues.password,6)

  const handleSubmit= (e)=>{
      e.preventDefault()
      e.target.reset()
  }

  const handleChangeInput = (identifier, value)=>{
    setEnteredValues(prevState=>({
          ...prevState,
          [identifier]:value
        }))
    setDidEdit(prevState => ({
          ...prevState,
          [identifier]: false
        }))
  } 

  const handleBlur =(identifier)=>{
        setDidEdit(prevState => ({
          ...prevState,
          [identifier]: true
        }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email" 
          name="email" 
          onBlur={()=> handleBlur("email")} 
          value={enteredValues.email} 
          onChange={(e)=> handleChangeInput("email",e.target.value)}
          error={emailIsInvalid && "Please enter a valid email"}
        />
        <Input
          label="Password"
          id="password"
          type="password" 
          name="password" 
          value={enteredValues.password} 
          onChange={(e)=> handleChangeInput("password",e.target.value)}
          onBlur={()=> handleBlur("password")} 
          error={passwordIsInvalid && "Should be atleast 6 characters long"}
        />

      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
