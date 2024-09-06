/* eslint-disable */
import { useCallback, useEffect, useState } from "react";
import "./Requests.css";

function Requests() {
  const socket = new WebSocket("https://echo.websocket.org/.ws");
  const [message, setMessage] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    socket.onopen = (e) => {
      setMessage("Соединение установлено");
    };

    socket.onmessage = (e) => {
      if (e.data.startsWith("Request served by")) {
        setMessage("Добро пожаловать!");
      } else {
        setMessage(e.data);
      }
    };

    socket.onerror = (e) => {
      setMessage(e.message);
    };

    return () => {
      setMessage("Соединение завершено!");
    };
  }, [setMessage]);

  function handleAddMessage() {
    if (socket.readyState) {
      setIsValid(true);
      socket.send(
        JSON.stringify({
          message: inputValue,
        })
      );

      setMessage(inputValue);
    } else {
      setTimeout(handleAddMessage, 50);
    }
  }

  const handleChange = useCallback((e) => {
    if (e.target.value.length !== 0) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
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
        <button
          disabled={!isValid}
          style={{
            backgroundColor: !isValid ? "#C2C2C2" : "",
          }}
          className="requests__button"
          onClick={handleAddMessage}
        >
          Отправить сообщение
        </button>
      </div>
      {message && <p className="requests__message">{message}</p>}
    </section>
  );
}

export default Requests;
