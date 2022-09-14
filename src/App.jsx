import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import Category from "./Pages/Category";
import ErrorPage from "./Pages/ErrorPage";
import Recipe from "./Pages/Recipe";

import Navbar from "./components/Navbar";
import Ingredients from "./components/Ingredients";
import Instructions from "./components/Instructions";
import Player from "./components/Player/";

import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.App}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Home />} />

          <Route path="/catalogo/:categoryName">
            <Route index element={<Category />} />

            <Route path="/catalogo/:categoryName:recipeName/:id">
            <Route index element={<Recipe />} />
                <Route path="ingredients" element={<Ingredients />} />
                <Route path="instructions" element={<Instructions />} />
                <Route path="video" element={<Player />} youtubeUrl="prova" />  
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
  );
}

export default App;
