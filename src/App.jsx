import Quotebox from './Components/Quotebox';
import quoteDB from './db/quotes.json';
import colors from './db/colors.js';
import { useState } from 'react';
import QuoteButton from './Components/QuoteButton';

function App() {
  const getRandom = (array) => {
    const randomIndex = Math.floor(array.length * Math.random());
    return array[randomIndex];
  };

  const [quote, setQuote] = useState(getRandom(quoteDB));
  const [color, setColor] = useState(getRandom(colors));

  console.log(color);

  const getNewValues = () => {
    const newQuote = getRandom(quoteDB);
    const newColor = getRandom(colors);
    setQuote(newQuote);
    setColor(newColor);
  };

  const backgroundObject = {
    backgroundColor: color,
  };
  const colorObject = {
    color: color,
  };

  return (
    <div className="App" style={backgroundObject}>
      <Quotebox
        quote={quote}
        getNewValues={getNewValues}
        backgroundObject={backgroundObject}
        colorObject={colorObject}
      />
    </div>
  );
}

export default App;
