import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import Category from "./Pages/Category";
import ErrorPage from "./Pages/ErrorPage";
import Navbar from "./components/Navbar";

import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.App}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Home />} />
          <Route path="/catalogo/:categoryName" element={<Category />} />
          <Route path="*" element={<ErrorPage name="prova" status={404} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
