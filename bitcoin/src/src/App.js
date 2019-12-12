import React, { useEffect } from 'react';
import yoga from 'yoga-layout-prebuilt';


function Row({title, text, style}) {
  return (
      <view style={{...style, flexDirection: yoga.FLEX_DIRECTION_ROW, justifyContent: yoga.JUSTIFY_SPACE_BETWEEN}}>
        <text>{title}</text>
        <text>{text}</text>
      </view>
  );
}

function Details({ticker}) {
  return (
    <view style={{paddingTop: 12}}>
      <Row title="Updated" text={new Date(ticker.time.updatedISO).toLocaleTimeString("en-US", {hour: '2-digit', minute:'2-digit'})} style={{paddingBottom: 5}} />
      <Row title={ticker.bpi.USD.code} text={`$${ticker.bpi.USD.rate}`} />
      <Row title={ticker.bpi.GBP.code} text={ticker.bpi.GBP.rate} />
      <Row title={ticker.bpi.EUR.code} text={ticker.bpi.EUR.rate} />
    </view>
  );
}

function App() {
  const [ticker, setTicker] = React.useState(null);

  useEffect(() => {
    window.buttonPressed = () => {
      setTicker(null)
      fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((o)=> o.json ? o.json() : JSON.parse(o))
      .then(setTicker)
    }

    window.buttonPressed()
  }, []);

  return (
    <view>
      {ticker === null ? <text>Loading...</text> : <text>{ticker.chartName}</text>}
      {ticker === null ? null : <Details ticker={ticker} />}
    </view>
  );
}

export default App;
