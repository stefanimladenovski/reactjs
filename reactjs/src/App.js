import { PureUnpure } from "./components/PureUnpure";
import { Counter } from "./components/Counter";
import { Todos } from "./components/Todos"
import { Posts } from "./components/Posts"

const App = () => {

  return (
    <div>
      
      <hr /> <hr /> <h3>ZADACA 4</h3><br /> <hr /> <hr />
      <Posts />
      <hr /> <hr /> <h3>ZADACA 3</h3><br /> <hr /> <hr />
      <Todos />
      <hr /> <hr /> <h3>ZADACA 2</h3><br /> <hr /> <hr />
      <Counter />
      <hr /> <hr /> <h3>ZADACA 1</h3><br /> <hr /> <hr />
      <PureUnpure />
      
    </div>
  );
}

export default App
