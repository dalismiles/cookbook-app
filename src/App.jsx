import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.module.css";
import { Home, Category, ErrorPage } from "./pages";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Home />} />
        <Route path="/catalogo/:categoryName" element={<Category />} />
        <Route path="*" element={<ErrorPage name="prova" status={404} />} />
      </Routes>
    </Router>
  );
}

export default App;
