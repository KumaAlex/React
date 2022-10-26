import React, { useState } from 'react';

export function Counter() {
  // Объявление новой переменной состояния «count»
  const [count, setCount] = useState(0);

  function plus() {
    setCount(count + 1)
  }

  function minus() {
    setCount(count - 1)
  }
  
  return (
    <div>
      <p>Вы кликнули {count} раз(а)</p> 


      <button onClick={plus}>Plus</button>
      <button onClick={minus}>Minus</button>
    </div>
  );
}