import CoreConept from "./components/CoreConept";
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
      </main>
    </div>
  );
}

export default App;
