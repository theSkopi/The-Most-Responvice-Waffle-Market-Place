import React from "react";
import HomeArticleCard from "../components/HomeArticleCard";
import data from "../data/home-articles.json";
import Styles from "../styling/Home.module.css";

const Home = () => {
  return (
    <section className={Styles.article__container}>
      {data.map((article) => (
        <HomeArticleCard key={article.id} article={article} />
      ))}
    </section>
  );
};

export default Home;
