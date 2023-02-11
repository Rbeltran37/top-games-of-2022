import React from 'react';
import './App.css';
import Background from "./components/Background.js"
import Cards from "./components/Cards.js"
import data from "./data";

export default function App() {

  const cards = data.map(item => {
    return (
      <Cards
        key={item.id}
        item={item}
      />
    )
  })

  return (
    <div>
      <Background />
      {cards}
    </div>
  );
}
