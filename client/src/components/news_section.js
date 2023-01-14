import React from "react";
import Card from "./card";
import { useState, useEffect } from "react";
import Dashboard from "./dashboard";
import "../styles/news_section.css";

const Section = () => {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState("");
  let url =
    `https://newsdata.io/api/1/news?apikey=pub_153862c3f1896b56fe4a54b7767470039be57&language=en` +
    (category ? `&category=${category}` : ``);

  const getNews = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setNews(data.results);
  };

  useEffect(() => {
    getNews(url);
  }, [url]);

  console.log(news);
  return (
    <>
      <Dashboard setCategory={setCategory} />
      <section className="newsList">
        {news
          .filter((news) => news.image_url && news.keywords)
          .map((element) => {
            //console.log(element.keywords);
            return (
              <Card
                title={element.title}
                image={element.image_url}
                keywords={element.keywords}
              />
            );
          })}
      </section>
    </>
  );
};

export default Section;
