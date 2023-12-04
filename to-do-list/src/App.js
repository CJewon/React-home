import { useState, useEffect } from "react";

function Hello() {
  function byeFn() {
    console.log("bye :(")
  }
  function hiFn() {
    console.log("created :)")
    return byeFn
  }
  useEffect(hiFn, [])
  return <div>hello</div>
}

function App() {
    const [showing, setShowing] = useState(false)
    const onClick = () => setShowing((prev) => !prev)
    return (
    <div className="App">
      {showing ? <Hello></Hello> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
