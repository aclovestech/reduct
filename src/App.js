import React from "react";
import Header from "./components/Header/Header";
import Posts from "./features/posts/Posts";
import Subreddits from "./features/subreddits/Subreddits";
import "./styles/global.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Posts />
        <Subreddits />
      </main>
    </div>
  );
}

export default App;
