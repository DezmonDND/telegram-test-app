/* eslint-disable */
import { useCallback, useEffect, useState } from "react";
import "./Requests.css";

function Requests() {
  const socket = new WebSocket("https://echo.websocket.org/.ws");
  const [message, setMessage] = useState("");
  const [inputValue, setInputValue] = useState("");

  function onConnect() {
    socket.onopen = (e) => {
      setMessage("Соединение установлено");
    };
  }

  function onClose() {
    socket.onclose = (e) => {
      setMessage("Соединение завершено!");
    };
  }

  useEffect(() => {
    onConnect();

    socket.onmessage = (e) => {
      setMessage("Добро пожаловать!");
    };

    return () => {
      setMessage("Соединение завершено!");
    };
  }, [setMessage]);

  const handleAddMessage = useCallback(
    (e) => {
      e.preventDefault();

      if (socket.readyState === 1) {
        socket.send(
          JSON.stringify({
            message: inputValue,
          })
        );
      }
    },
    [inputValue]
  );

  const handleChange = useCallback((e) => {
    setInputValue(e.target.value);
  }, []);

  return (
    <section className="requests">
      <h1>WebSocket</h1>

      <div className="requests__container">
        <input
          className="requests__input"
          type="text"
          placeholder="Введите сообщение"
          value={inputValue}
          onChange={handleChange}
        ></input>
      </div>
      <div className="requests__buttons">
        <button className="requests__button" onClick={handleAddMessage}>
          Отправить сообщение
        </button>
        <button className="requests__button" type="button" onClick={onClose}>
          Завершить соединение
        </button>
      </div>
      {message && <p className="requests__message">{message}</p>}
    </section>
  );
}

export default Requests;
