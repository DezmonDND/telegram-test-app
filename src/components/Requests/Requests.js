/* eslint-disable */
import { useEffect, useState } from "react";
import "./Requests.css";

function Requests() {
  const socket = new WebSocket("https://echo.websocket.org/.sse");
  const [message, setMessage] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    socket.onopen = (e) => {
      setMessage("Соединение установлено");
    };

    socket.onmessage = (e) => {
      setMessage(e.data);
    };

    socket.onerror = (e) => {
      setMessage(e.message);
    };

    return () => {
      socket.onclose = () => {
        setMessage("Соединение завершено!");
      };
    };
  }, [message]);

  const handleChange = (e) => {
    if (e.target.value.length !== 0) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
    setInputValue(e.target.value);
  };

  function handleAddMessage() {
    if (socket.readyState) {
      setIsValid(true);
      socket.send(inputValue);
      setMessage(message);
      setInputValue("");
      setIsValid(false);
    } else {
      setTimeout(handleAddMessage, 50);
    }
  }

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
      {message ? (
        <p className="requests__message">{message}</p>
      ) : (
        <div
          style={{
            height: 50,
            marginTop: 15,
            marginBottom: 15,
          }}
        ></div>
      )}
    </section>
  );
}

export default Requests;
