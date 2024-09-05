import { useEffect, useState } from "react";
import "./Cards.css";
import { api } from "../utils/api";

function Cards() {
  const [news, setNews] = useState([]);
  const [showNews, setShowNews] = useState(2);

  function getNewsList() {
    if (news.length !== 0) {
      return news.articles.slice(0, showNews);
    }
  }

  const newsList = getNewsList();

  function showMoreNews() {
    setShowNews(showNews + 2);
  }

  useEffect(() => {
    api
      .getNews()
      .then((res) => {
        setNews(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [setNews]);

  return (
    <section className="cards">
      <div className="cards__block">
        {news.length !== 0 &&
          newsList.map((item) => (
            <div className="cards__container">
              <p className="cards__author">{item.author}</p>
              {item.title.length !== 0 && (
                <p className="cards__title">{item.title}</p>
              )}
              <p className="cards__description">{item.description}</p>
              <img
                className="cards__image"
                src={item.urlToImage}
                alt={item.title}
              ></img>
            </div>
          ))}
        <button className="cards__button" type="button" onClick={showMoreNews}>
          Показать еще
        </button>
      </div>
    </section>
  );
}

export default Cards;
