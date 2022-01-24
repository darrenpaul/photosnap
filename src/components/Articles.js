import React, { useState } from "react";
import ArticleItem from "./ArticleItem";

const Articles = () => {
  const [articles, setArticles] = useState([
    {
      id: 1,
      title: "The Mountains",
      author: "John Appleseed",
      image: "/assets/stories/desktop/mountains.jpg",
      url: "",
    },
    {
      id: 1,
      title: "Sunset Cityscapes",
      author: "Benjamin Cruz",
      image: "/assets/stories/desktop/cityscapes.jpg",
      url: "",
    },
    {
      id: 1,
      title: "18 Days Voyage",
      author: "Alexei Borodin",
      image: "/assets/stories/desktop/18-days-voyage.jpg",
      url: "",
    },
    {
      id: 1,
      title: "Architecturals",
      author: "Samantha Brooke",
      image: "/assets/stories/desktop/architecturals.jpg",
      url: "",
    },
  ]);

  return (
    <div className="grid grid-cols-4 bg-pure-white">
      {articles.map((article) => (
        <ArticleItem
          key={article.id}
          title={article.title}
          author={article.author}
          image={article.image}
          url={article.url}
        />
      ))}
    </div>
  );
};
export default Articles;
