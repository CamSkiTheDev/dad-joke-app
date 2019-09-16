import React, { useState, useEffect } from "react";
import "./App.sass";

export default () => {
  const [appState, SetAppState] = useState({ isLoading: true, joke: "" });

  const GetJoke = () => {
    fetch("https://icanhazdadjoke.com/", {
      headers: { Accept: "application/json" }
    })
      .then(res => res.json())
      .then(json => SetAppState({ ...appState, joke: json.joke }))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetch("https://icanhazdadjoke.com/", {
      headers: { Accept: "application/json" }
    })
      .then(res => res.json())
      .then(json => SetAppState({ isLoading: false, joke: json.joke }))
      .catch(err => console.error(err));
  }, []);

  const { isLoading, joke } = appState;

  if (isLoading) return <h2>Loading...</h2>;

  return (
    <div>
      <h2>Punny Dad Joke App</h2>
      <h1>{joke}</h1>
      <button onClick={GetJoke}>Not Funny?</button>
    </div>
  );
};
