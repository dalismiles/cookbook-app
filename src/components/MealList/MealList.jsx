import React from "react";
import MealListItem from "../MealListItem";

import styles from "./index.module.scss";

const MealList = (props) => {
  const { meals = [], categoryName = "" } = props;

  return (
    <section className="MealList">
      <ul>
        {meals.map((meal) => (
          <MealListItem
            key={meal.idMeal}
            meal={meal}
            categoryName={categoryName}
          />
        ))}
      </ul>
    </section>
  );
};

export default MealList;
