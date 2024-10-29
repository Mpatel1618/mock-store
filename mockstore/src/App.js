import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import NavBar from "./components/navigation/NavBar";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import About from "./components/pages/About";

function App() {
  return (
    <div className="background">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
