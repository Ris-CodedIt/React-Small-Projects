import Header from "./components/Header";
import Concepts from "./components/Concepts";
import Examples from "./components/Examples";


function App() {

  return (
    <div>
      <Header />
      <main>
        <Concepts/>
        <Examples/>
      </main>
    </div>
  );
}

export default App;