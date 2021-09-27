import React, { useState } from "react";

//import styles
import "./styles/app.scss";
import Counter from "./components/Counter";

function App() {
  const [count, setCount] = useState(0);

  return <Counter count={count} setCount={setCount} />;
}

export default App;
