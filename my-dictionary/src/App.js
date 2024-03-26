import "./App.css";
import { useState } from "react";

export default function App() {
  const [searchText, setSearchText] = useState("");
  const [meaning, setMeaning] = useState("");
  const [searchState, setSearchState] = useState(false);
  const Dictionary = [
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const foundWord = Dictionary.find(
      (item) => item.word.toLowerCase() === searchText.toLowerCase()
    );
    if (foundWord) {
      setMeaning(foundWord.meaning);
      setSearchState(true);
    } else {
      setMeaning("");
      setSearchState(true);
    }
  };

  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <h4>Definition:</h4>
      {searchState === true ? (
        meaning ? (
          <p>{meaning}</p>
        ) : (
          <p>Word not found in the dictionary.</p>
        )
      ) : (
        ""
      )}
    </div>
  );
}
