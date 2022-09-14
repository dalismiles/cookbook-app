import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import Category from "./Pages/Category";
import ErrorPage from "./Pages/ErrorPage";
import Recipe from "./Pages/Recipe";

import Navbar from "./components/Navbar";
// import { Player } from "./components/Player/";

import styles from "./App.module.scss";

export const CounterContext = createContext(0);

function App() {
  const [state, setState] = useState(0);
  return (
    <CounterContext.Provider value={{ state, setState }}>
      <div className={styles.App}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogo" element={<Home />} />

            <Route path="/catalogo/:categoryName">
              <Route index element={<Category />} />

              <Route path=":recipeName/:id" element={<Recipe />}>
                <Route path="" element={"Sei nella index della ricetta"} />
                {/* <Route path="youtube" element={<Player />} /> */}
              </Route>
            </Route>
            <Route
              path="/catalogo/:categoryName/new"
              element={<ErrorPage status={500} />}
            />
            <Route path="*" element={<ErrorPage name="prova" status={404} />} />
          </Routes>
        </Router>
      </div>
    </CounterContext.Provider>
  );
}

export default App;
