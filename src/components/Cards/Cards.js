import { useEffect, useState } from "react";
import { api } from "../utils/api";
import "./Cards.css";

function Cards() {
  const [news, setNews] = useState([]);
  const [showNews, setShowNews] = useState(2);
  const newsList = getNewsList();

  function getNewsList() {
    if (news.length !== 0) {
      return news.slice(0, showNews);
    }
  }

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

  function convertDate(data) {
    let date = new Date(data);
    return date.toLocaleDateString();
  }

  return (
    <section className="cards">
      <div className="cards__block">
        {news.length !== 0 &&
          newsList.map((item) => (
            <div className="cards__container" key={item.id}>
              <p className="cards__author">{item.title}</p>
              {item.title.length !== 0 && (
                <a
                  className="cards__link"
                  href={item.links.article}
                  target="blank"
                >
                  Оригинал статьи
                </a>
              )}
              <p className="cards__description">{item.details}</p>
              <p className="cards__date">{convertDate(item.event_date_utc)}</p>
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
