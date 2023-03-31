// Importing necessary components
import React from "react";
import Header from "./components/Header";
import Meme from "./components/Meme";

// Defining the App component
export default function App() {
  // Returning the header and meme components inside a div
  return (
    <div>
      <Header />
      <Meme />
    </div>
  );
}
