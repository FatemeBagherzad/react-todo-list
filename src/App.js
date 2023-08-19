import { useState } from 'react';
import Header from './components/Header';
import List from './components/List';

function App() {
  const listItems = [
    'Hit the gym',
    'Pay bills',
    'Meet George',
    'Buy eggs',
    'Read a book',
    'Organize office',
  ];

  {
    /** PART 2: Add listItems into state*/
  }
  const [items, setItems] = useState(listItems);

  const clickHandler = (item) => {};

  return (
    <>
      {/** PART 2: Pass clickHandler to the Header */}
      <Header title="My Notes" items={items} setItems={setItems} />
      <List items={items} />
    </>
  );
}

export default App;
