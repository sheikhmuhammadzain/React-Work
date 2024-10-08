import CoreConept from "./components/CoreConept";
import Components from './assets/components.png'
import Config from './assets/config.png'
import JsxUi from './assets/jsx-ui.png'
import State from './assets/state-mgmt.png'
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
            <CoreConept img={Components} title="zain afzal" desc='this is the description of the function' />
            <CoreConept img={State} title="Arham" desc='this is the description of second'  />
            <CoreConept img={JsxUi} title="ali" desc='this is the description of the third function'  />
            <CoreConept img={Config} title="Suleman" desc='this is the description of the 4th function'  />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
