import {useState} from "react";
import "./App.css";

import layout from "./components/layout";

import PortfolioDashboard from "./components/PortfolioDashboard";
import Contact from "./components/Contact";
import About from "./components/About";

const pagfes = ["portfolio", "contact", "about"];

function App() {
    const [page, setPage] = useState("portfolio"); 

  return (
<layout pages={pages} onSetPage={setPage}>
{page ==="portfolio" && <PortfolioDashboard />}
{page ==="about" && <About />}

{page ==="contact" && <Contact />}





</layout>
  );
}

export default App;