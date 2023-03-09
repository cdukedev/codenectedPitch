import { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Home from "./pages/Home/Home";

function App() {
  const [count, setCount] = useState(0);

  return <Home />;
}

export default App;
