import { useState } from "react";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJokes(response.data.jokes); // append data
        console.log("response Data ----- ", response);

        //     response = big object with metadata + data.
        // response.data = actual body payload from backend.
        // response.data.jokes = the array of jokes inside that payload.
      })
      .catch((error) => {
        console.error(error);
      });
  }, []); // only run once when component mounts

  // no parsing of the data and other things, as all these are handled bt axios

  return (
    <>
      <h1> Full Stack Project Practice</h1>
      <p>JOKES: {jokes.length} </p>
      {jokes.map((joke) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.text}</p>
        </div>
      ))}
    </>
  );
}

export default App;
