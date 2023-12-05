import { useState } from "react";
import quotes from "./assets/quotes.json";
import { FaTwitter, FaFacebook, FaQuoteLeft } from "react-icons/fa";
import "./App.css";

interface Quote {
  quote: string;
  author: string;
}
const getRandomQuote = (): Quote => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

const getRandomColor = (): string => {
  const red = Math.floor(Math.random() * (250 - 100 + 1)) + 100;
  const green = Math.floor(Math.random() * (250 - 100 + 1)) + 100;
  const blue = Math.floor(Math.random() * (250 - 100 + 1)) + 100;

  return `rgb(${red},${green},${blue})`;
};

const transition = "all 0.9s";

function App() {
  const [quote, setQuote] = useState<Quote>(getRandomQuote());
  const [randomColor, setRandomColor] = useState<string>(getRandomColor());
  const [opacity, setOpacity] = useState(1);

  const changeQuote = () => {
    setOpacity(0);
    setRandomColor(getRandomColor());
    setTimeout(() => {
      setQuote(getRandomQuote());
      setOpacity(1);
    }, 600);
  };

  return (
    <div
      className="background"
      style={{ backgroundColor: randomColor, transition }}
    >
      <div
        id="quote-box"
        style={{
          boxShadow: `5px 5px 10px ${randomColor}`,
          color: randomColor,
          transition,
        }}
      >
        <div className="quote-content" style={{ opacity, transition }}>
          <div id="text">
            <FaQuoteLeft size="1em" style={{ marginRight: "10px" }} />
            <span>{quote.quote}</span>
          </div>
          <span id="author">- {quote.author}</span>
        </div>
        <div className="buttons">
          <a
            id="tweet-quote"
            title="tweet this quote"
            href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22If%20you%E2%80%99re%20offered%20a%20seat%20on%20a%20rocket%20ship%2C%20don%E2%80%99t%20ask%20what%20seat!%20Just%20get%20on.%22%20Sheryl%20Sandberg"
            target="_blank"
            style={{
              backgroundColor: randomColor,
              transition,
              marginRight: "5px",
            }}
          >
            <FaTwitter color="white"></FaTwitter>
          </a>
          <a
            id="post-quote"
            title="post this quote"
            href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22If%20you%E2%80%99re%20offered%20a%20seat%20on%20a%20rocket%20ship%2C%20don%E2%80%99t%20ask%20what%20seat!%20Just%20get%20on.%22%20Sheryl%20Sandberg"
            target="_blank"
            style={{
              backgroundColor: randomColor,
              transition,
              marginRight: "5px",
            }}
          >
            <FaFacebook color="white" />
          </a>
          <button
            id="new-quote"
            onClick={changeQuote}
            style={{ backgroundColor: randomColor, transition }}
          >
            New quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
