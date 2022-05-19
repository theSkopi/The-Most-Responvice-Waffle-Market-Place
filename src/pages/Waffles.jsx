import React from "react";
import data from "../data/waffles.json";
import Styles from "../styling/Waffles.module.css";
import WaffleCard from "../components/WaffleCard";

function Waffles() {
  return (
    <>
      <h2>Waffles</h2>
      <div className={`${Styles.container}`}>
        {data.map((waffle) => (
          <WaffleCard key={waffle.id} waffle={waffle} />
        ))}
      </div>
    </>
  );
}

export default Waffles;
