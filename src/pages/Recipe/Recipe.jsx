import React from "react";
import { NavLink, useParams, Outlet } from "react-router-dom";
import { ENDPOINTS } from "../../api/endpoints";
import { useFetch } from "../../api/use-fetch";

import styles from "./index.module.scss";

const formatRecipe = (data) => {
  const initialRecipe = data.meals?.at(0) ?? {};

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const name = initialRecipe[`strIngredient${i}`];
    const value = initialRecipe[`strMeasure${i}`];

    if (!name?.length) {
      continue;
    }

    ingredients.push({ name, value });
  }

  return {
    name: initialRecipe.strMeal,
    id: initialRecipe.idMeal,
    video: initialRecipe.strYoutube,
    thumbnailSrc: initialRecipe.strMealThumb,
    tags: initialRecipe.strTags,
    instructions: initialRecipe.strInstructions,
    ingredients,
  };
};

const Recipe = () => {
  const tab = [
    {
      name: "Ingredients",
      path: "/ingredients",
    },
    {
      name: "Instructions",
      path: "/instructions",
    },
    {
      name: "Video",
      path: "/video",
    },
  ];

  const { categoryName, recipeName, id } = useParams();
  const { data, loading, error } = useFetch(
    `${ENDPOINTS.DETAIL}?i=${id}`,
    formatRecipe
  );

  if (!data) {
    return "loading...";
  }

  return (
    <div className={styles.Recipe}>
      <h1>
        {categoryName} - {recipeName}
      </h1>
      <img src={data.thumbnailSrc} alt={data.name} />
      <nav className={styles.tab}>
        {tab.map((item, i) => (
          <NavLink
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.link_active}` : styles.link
            }
            to={`.${item.path}`}
            key={i}
          >
            {item.name}
          </NavLink>
        ))}
      </nav>

      <Outlet context={data} />
    </div>
  );
};

export default Recipe;

// {tab === 'ingredients' && <p>{data.ingredients}</p>}
// {tab === 'youtube' && <p>{data.youtubeUrl}</p>}
