import React, { useState } from 'react';
import Main from './Main';
import './style.css';

export default function App() {
  const [color, setColor] = useState('');
  const [hexa, setHexa] = useState('');
  const [isDark, setIsDark] = useState(true);

  /*const handleSubmit = (e) => {
    e.preventDefault();
    console.log(color);
    setColor('');
  };
*/

  return (
    <div>
      <h1>Color Changer</h1>
      <br />
      <hr />
      <Main
        color={color}
        setColor={setColor}
        hexa={hexa}
        setHexa={setHexa}
        isDark={isDark}
        setIsDark={setIsDark}
        //handleSubmit={handleSubmit}
      />
    </div>
  );
}
