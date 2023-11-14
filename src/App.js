import React, {useState, useEffect } from "react";

function App(){
  const [ count, setCount ] = useState(0);

  useEffect(
    () => {
      console.log("useEffect");
      document.title = 'You clicked ${count} times';
    }
  )

    return (
      <>
        <p> You clicked {count} times </p>
        <button onClick={
          () => {
            console.log("Click");
            setCount(count + 1);
          }
        }>Clieck Me</button>
      </>
    )
}
export default App;