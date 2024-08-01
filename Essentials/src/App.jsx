import { useState } from "react";
import { CORE_CONCEPTS,EXAMPLES } from "./data";
import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";


function App() {
  const [selectedTopic, setSelectedTopic]= useState("")
  const handleClick=(topic)=>{
      setSelectedTopic(topic)
  }


  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem)=> <CoreConcept key={conceptItem.title} {...conceptItem}/>)}
          </ul>
        </section>

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
      </main>
    </div>
  );
}

export default App;