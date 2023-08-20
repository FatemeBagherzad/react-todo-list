import { useState } from 'react';

const Header = ({ title, addHandler }) => {
  const [inputv, setInputv] = useState('');

  const addinputValue = (event) => {
    console.log(event.target.value);
    setInputv(event.target.value);
  };

  return (
    <header className="header">
      <h2 style={{ margin: '5px' }}>{title}</h2>
      <input
        type="text"
        placeholder="Tile"
        id="myInput"
        onChange={addinputValue}
      />
      <span className="addBtn" onClick={() => addHandler(inputv)}>
        Add
      </span>
    </header>
  );
};
export default Header;
