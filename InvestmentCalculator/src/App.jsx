import { useState } from "react"
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results"

function App() {
  const [userInput, setUserInput]= useState({
              initialInvestment:1000,
              annualInvestment: 1200,
              expectedReturn:6,
              duration:10,
          })

  const inputIsValid = userInput.duration >= 1 


  const handleChange= (inputIdentifier, newValue)=>{
        setUserInput((prevUserInput=>{
          return {
              ...prevUserInput,
              [inputIdentifier]: +newValue,
          }
        }))
      }


  return (
    <>
      <Header />
      <UserInput userInput={userInput} handleChange={handleChange}/>
      {inputIsValid ?<Results userInput={userInput}/>:<p className="center">Please enter a duration greater than 0</p>} 
      
    </>
    
  )
}

export default App
