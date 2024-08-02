import React from 'react'
import { useState } from 'react'




const UserInput = ({userInput,handleChange}) => {




  return (
    <section id='user-input'>
        <div className="input-group">
            <p>
                <label>Initial Investment</label>
                <input type="number" value={userInput.initialInvestment} onChange={(e)=>handleChange("initialInvestment", e.target.value )}  required />
            </p>

            <p>
                <label>Annual Investment</label>
                <input type="number" value={userInput.annualInvestment} onChange={(e)=>handleChange("annualInvestment", e.target.value )} required />
            </p>
        </div>
        <div className="input-group">
            <p>
                <label>Expected Return</label>
                <input type="number" value={userInput.expectedReturn} onChange={(e)=>handleChange("expectedReturn", e.target.value )} required />
            </p>

            <p>
                <label>Duration</label>
                <input type="number" value={userInput.duration} onChange={(e)=>handleChange("duration", e.target.value )} required />
            </p>
        </div>
    </section>
  )
}

export default UserInput