import { useState } from 'react';

const Header = (props) => {
  {
    /** PART 1 : Add Click event*/
  }
  const clickHandler = (item) => {};
  {
    /** PART 2 : Store the input Text in state*/
  }

  return (
    <header className="header">
      <h2 style={{ margin: '5px' }}>{props.title}</h2>
      <input type="text" id="myInput" placeholder="Title..." />
      <span className="addBtn">Add</span>
    </header>
  );
};

export default Header;
