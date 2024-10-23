import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import { CORE_CONCEPTS } from "./data";
function App() {
function handleClick (){
  alert('hi')
  
}
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
          <h2>Core Concepts 2</h2>
          <ul>


 {CORE_CONCEPTS.map((core,i)=>
    //  <CoreConcept key={i} img={CORE_CONCEPTS[i].image} title={CORE_CONCEPTS[i].title} desc={CORE_CONCEPTS[i].description} />
    
    <CoreConcept key={i} {...CORE_CONCEPTS[i]}/>

 )}

          </ul>
        </section>
        <section id="examples">
        <h2>Examples</h2>
        <h1></h1>
        <menu>
          <TabButton  onSelect={handleClick}  >
           <button>Components</button>
          </TabButton>
          <TabButton  onSelect={handleClick} >
            <h1>JSX</h1>
          </TabButton>
          <TabButton onSelect={handleClick}  >
            <h1>Props</h1>
          </TabButton>
          <TabButton onSelect={handleClick} >
            <h1>State</h1>
          </TabButton>
        </menu>
      </section>
      </main>
  </div>
  );
}

export default App;
