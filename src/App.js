import { useState } from "react"; // import useState

function App() {
  // const [click1, setClick1] = useState(false);
  // const [click2, setClick2] = useState(false);
  // const [click3, setClick3] = useState(false);
  // const [click4, setClick4] = useState(false);
  // const [click5, setClick5] = useState(false);

  // const toggle1 = () => {
  //   setClick1((click1) => !click1);
  // };
  // const toggle2 = () => {
  //   setClick2((click2) => !click2);
  // };
  // const toggle3 = () => {
  //   setClick3((click3) => !click3);
  // };
  // const toggle4 = () => {
  //   setClick4((click4) => !click4);
  // };
  // const toggle5 = () => {
  //   setClick5((click5) => !click5);
  // };

  const [click1, toggle1] = useToggle(false);
  const [click2, toggle2] = useToggle(false);
  const [click3, toggle3] = useToggle(false);
  const [click4, toggle4] = useToggle(false);
  const [click5, toggle5] = useToggle(false);

  return (
    <>
      <button onClick={toggle1}> {click1 ? "Hello" : "Goodbye"} </button>
      <button onClick={toggle2}> {click2 ? "Hello" : "Goodbye"} </button>
      <button onClick={toggle3}> {click3 ? "Hello" : "Goodbye"} </button>
      <button onClick={toggle4}> {click4 ? "Hello" : "Goodbye"} </button>
      <button onClick={toggle5}> {click5 ? "Hello" : "Goodbye"} </button>
    </>
  );
}

const useToggle = (defaultValue = false) => {
  const [click, setClick ] = useState( defaultValue )
  const toggle = () => setClick((click)=>!click)

  return [click, toggle];
}


export default App;
