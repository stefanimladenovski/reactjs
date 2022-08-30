import FuncComp from "./components/FuncComp";
import ClassComp from "./components/ClassComp";

// function App() {
//   return (
//     <div>
//       <h1>Hello World !!! </h1>
//       <p>this is my first paragraph 1</p>
//     </div>
//   );
// }

const App = () => {

  return (
    <div>
      <h1>HELLO WORLD !!! </h1>
      <p>This is my first paragraph !!</p>

      <FuncComp name="Stefani" />

      <FuncComp name="Kristijan" />

      <FuncComp name="Riki" />

      <FuncComp name="Bella" />

      <ClassComp />

    </div>
  );
}

// const App = () => (
//     <div>
//       <h1>Hello World !!! </h1>
//       <p>this is my first paragraph</p>
//     </div>
//   )

export default App