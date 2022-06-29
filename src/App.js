import React, { useEffect, useState } from "react";
import { logAction } from "../src/store/log-slice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const dispatch = useDispatch();
  const logged = useSelector((state) => state.log.logIn);
  // API call
  const fetchQuote = () => {
    axios
      .get("https://api.quotable.io/random")
      .then((response) => response.data)
      .then((data) => setData(data));
  };
  useEffect(() => {
    fetchQuote();
  }, []);
  console.log(data);
  const logInUser = (e) => {
    e.preventDefault();
    dispatch(logAction.login());
  };
  // ///////////////////////////
  return (
    <>
      <button onClick={logInUser}>{logged ? "Log-out" : "Log-in"}</button>
      <div className="App">
        {data && logged && (
          <div className="quoteCard">
            <p> {data.content} </p>
            <h3>{data.author} </h3>
          </div>
        )}
      </div>
      <button onClick={fetchQuote}>Fetch Quote</button>
    </>
  );
}

export default App;
