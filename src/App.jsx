import { useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Content from "./components/Content";

function App() {
  return (
    <div className="dictionary">
      <Header />
      <Search />
      <Content />
    </div>
  );
}

export default App;
