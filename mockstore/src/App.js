import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import NavBar from "./components/navigation/NavBar";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import About from "./components/pages/About";
import Login from "./components/login/Login";

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
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
