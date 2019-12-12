import React, { useEffect } from 'react';

function Row({item: {name}, selected}) {
  return (
    <text>{`${selected ? "[-]" : "[ ]"} ${name}`}</text>
  );
}

function App() {
  const [items, setItems] = React.useState([]);
  const [selected, setSelected] = React.useState(0);

  useEffect(() => {
    function fetchItems() {
      fetch("https://raw.githubusercontent.com/ericlewis/braclet/master/apps.json")
      .then((a) => {
        if (a.json) {
          a.json().then(setItems)
        } else {
          setItems(JSON.parse(a))
        }
      })
    }

    fetchItems()
  }, []);

  useEffect(() => { 
    window.buttonPressed = (btn) => {
      switch (btn) {
        case 1:
          return setSelected(Math.max(selected - 1, 0));
        case 2:
          /*eslint-disable no-undef*/
          return loadApp(items[selected].name)
          /*eslint-enable no-undef*/
        case 3:
          return setSelected(Math.min(selected + 1, items.length - 1));
        default:
          break;
      }
    }
  }, [selected, items.length])

  return (
    <view>
      {items.length === 0 ? <text>Loading...</text> : <text>App</text>}
      {items.map((item, idx) => <Row key={idx} item={item} selected={idx === selected} />)}
    </view>
  );
}

export default App;
