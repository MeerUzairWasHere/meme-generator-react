import React from "react";

export default function Meme() {
  // Define state variables for the top text, bottom text, and meme image
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg", // Default meme image
  });

  // Define state variable to hold all the memes from the API
  const [allMemes, setAllMemes] = React.useState([]);

  // Fetch all memes from the Imgflip API on component mount and save them to state
  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  // Function to get a new meme image by selecting a random image from the allMemes array and updating state

  // Function to handle changes to the input fields and update state accordingly
  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  function getMemeImage() {
    if (allMemes.length > 0) {
      const randomNumber = Math.floor(Math.random() * allMemes.length);
      const url = allMemes[randomNumber].url;

      setMeme((oldMeme) => ({
        ...oldMeme,
        randomImage: url,
      }));
    }
  }

  // Render the form and meme image
  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="Top text"
          className="form--input"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="form--input"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img
          width="400"
          src={meme.randomImage}
          alt="meme-images"
          className="meme--image"
        />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
