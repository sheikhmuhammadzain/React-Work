import CoreConept from "./components/CoreConept";
import TabButton from "./components/TabButton";
import { CORE_CONCEPTS } from "./data";
function App() {

console.log(CORE_CONCEPTS);

  return (
    <div>
      <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
      <main>
        <h2>Time to get started!</h2>
      </main>
      <main>
        <section id="core-concepts">
          <h2>Core Conceptes 2</h2>
          <ul>


 {CORE_CONCEPTS.map((core,i)=>
    //  <CoreConept key={i} img={CORE_CONCEPTS[i].image} title={CORE_CONCEPTS[i].title} desc={CORE_CONCEPTS[i].description} />
    
    <CoreConept key={i} {...CORE_CONCEPTS[i]}/>

 )}

          </ul>
        </section>
        <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton  >
            <h1>Compnents</h1>
          </TabButton>
          <TabButton  >
            <h1>JSX</h1>
          </TabButton>
          <TabButton  >
            <h1>Props</h1>
          </TabButton>
          <TabButton  >
            <h1>State</h1>
          </TabButton>
        </menu>
      </section>
      </main>
  </div>
  );
}

export default App;
