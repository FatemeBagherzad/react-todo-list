import { useState } from 'react';
import Header from './components/Header';
import List from './components/List';

const App = () => {
  const listItems = [
    'Hit the gym',
    'Pay bills',
    'Meet George',
    'Buy eggs',
    'Read a book',
    'Organize office',
  ];
  const [items, setItems] = useState(listItems);

  const addHandler = (item) => {
    setItems([...items, item]);
  };
  const deleteHandler = (idx) => {
    items.splice(idx, 1);
    setItems([...items]);
  };

  return (
    <>
      <Header title="My Note" addHandler={addHandler} />
      <List items={items} deleteHandler={deleteHandler} />
    </>
  );
};
export default App;
