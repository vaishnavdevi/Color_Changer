import React from 'react';
import colorNames from 'colornames';

const Main = ({ color, setColor, hexa, setHexa, isDark, setIsDark }) => {
  const colors = {
    backgroundColor: color,
    color: isDark ? '#000' : '#FFF',
  };

  return (
    <ul className="item">
      <li className="content" style={colors}>
        <br />
        <br />
        {color ? color : 'Empty Value'}
        <br />
        {hexa ? hexa : null}
      </li>
      <form className="addForm" onSubmit={(e) => e.preventDefault()}>
        <label>Color : </label>
        <input
          autoFocus
          type="text"
          placeholder="Add Color Name"
          required
          value={color}
          onChange={(e) => {
            setColor(e.target.value);
            setHexa(colorNames(e.target.value));
          }}
        />
        <button type="button" onClick={() => setIsDark(!isDark)}>
          Toggle Text Color
        </button>
      </form>
    </ul>
  );
};
export default Main;
