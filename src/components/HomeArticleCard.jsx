import React from "react";
import Styles from "../styling/Home.module.css";

const PostData = ({ author, postDate }) => {
  const date = new Date(postDate);
  return (
    <>
      <div className={Styles.author}>{`Posted By: ${author}`}</div>
      <span className={Styles.post__date}>{`${date.toLocaleString(
        "en-US",
        { month: "short" }
      )}. ${date.getDate()}. ${date.getFullYear()}`}</span>
    </>
  );
};

const HomeArticleCard = ({ article }) => {
  return (
    <>
      <div className={Styles.card}>
        <h2>{article.header}</h2>
        <p>
          {article.thumbnail && (
            <img
              className={` ${Styles.article}
              ${article.id % 2 === 0 ? Styles.left : Styles.right}
            `}
              src={`${process.env.PUBLIC_URL}/images/articles/id-${article.id}-image.jpg`}
              alt={article.thumbnail}
            />
          )}
          {article.article.split("//n").map((text, index) => (
            <span key={index}>
              {text} <br />
            </span>
          ))}
        </p>
        <footer className={Styles.post__data__container}>
          <PostData
            author={article.author}
            postDate={article.postdate}
          />
        </footer>
      </div>
      <div className={Styles.separating__line} />
    </>
  );
};

export default HomeArticleCard;
