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
      console.log("Соединение установлено");
    };
  }

  useEffect(() => {
    console.log(message);

    onConnect();

    socket.onmessage = (e) => {
      console.log(e);
      setMessage("Получено сообщение: " + e.data);
    };

    return () => {
      socket.close();
    };
  }, [message]);

  const handleAddMessage = useCallback(
    (e) => {
      e.preventDefault();

      socket.send(
        JSON.stringify({
          message: inputValue,
        })
      );
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
        <span>Сообщение:</span>
        <input
          className="requests__input"
          type="text"
          value={inputValue}
          onChange={handleChange}
        ></input>
      </div>
      <div className="row">
        <button className="requests__button" onClick={handleAddMessage}>
          Отправить сообщение
        </button>
      </div>
      {message && <p className="requests__message">{message}</p>}
    </section>
  );
}

export default Requests;
