import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import { useState } from "react";



const Examples = () => {
    const [selectedTopic, setSelectedTopic]= useState("")
    const handleClick=(topic)=>{
        setSelectedTopic(topic)
    }
  return (        
    <section id="examples">
        <h2>Examples</h2>
        <menu>
        <TabButton isSelected={selectedTopic === 'components'? true: false} onClick={()=> handleClick("components")}>Componets</TabButton>
        <TabButton isSelected={selectedTopic === 'jsx'? true: false} onClick={()=> handleClick("jsx")}>JSX</TabButton>
        <TabButton isSelected={selectedTopic === 'props'? true: false} onClick={()=> handleClick("props")}>Props</TabButton>
        <TabButton isSelected={selectedTopic === 'state'? true: false} onClick={()=> handleClick("state")}>State</TabButton>
        </menu>
        {selectedTopic ? (
            <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
                <code>
                {EXAMPLES[selectedTopic].code}
                </code>
            </pre>
            </div>): <p>Please select a topic </p>}
    </section>


  )
}

export default Examples