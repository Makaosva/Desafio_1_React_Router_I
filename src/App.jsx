import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );
}

export default App;
