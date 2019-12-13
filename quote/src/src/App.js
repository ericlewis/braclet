import React, { useEffect } from 'react';

function App() {
  const [quote, setQuote] = React.useState(null);

  useEffect(() => {
    window.buttonPressed = () => {
      fetch("https://api.quotable.io/random")
      .then((o)=> o.json ? o.json() : JSON.parse(o))
      .then(setQuote)
    }

    window.buttonPressed()
  }, []);

  return (
    <view style={{paddingTop: 10}}>
      {quote === null ? <text>Loading...</text> : <text>Random Quote</text>}
      {quote === null ? null : <text>{quote.content}</text>}
    </view>
  );
}

export default App;
