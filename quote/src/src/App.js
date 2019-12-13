import React, { useEffect } from 'react';

function App() {
  const [quote, setQuote] = React.useState(null);

  useEffect(() => {
    window.buttonPressed = () => {
      fetch("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json")
      .then((o)=> o.json ? o.json() : JSON.parse(o))
      .then(setQuote)
    }

    window.buttonPressed()
  }, []);

  return (
    <view style={{paddingTop: 10}}>
      {quote === null ? <text>Loading...</text> : <text>Random Quote</text>}
      {quote === null ? null : <text>{quote.quoteText}</text>}
    </view>
  );
}

export default App;
