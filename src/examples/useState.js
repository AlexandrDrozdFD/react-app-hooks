import React, {useState} from 'react';

function computedInitialCounter() {
  console.log('Render')
  return Math.trunc(Math.random() * 20);
}

function App() {
  const [counter, setCounter] = useState(() => {
    return computedInitialCounter();
  });
  // используется cb() для того, чтобы не рендерился каждый раз при изменении
  // стэйта. Это для производительности важно

  const [state, setState] = useState({
    title: 'Counter',
    data: Date.now()
  })

  const increment = () => {
    // setCounter(counter + 1);
    // setCounter(counter + 1);

    // base on prev value of state (best practice)
    setCounter((prev) => prev + 1);
    setCounter((prev) => prev + 1);
  }

  const decrement = () => {
    setCounter(counter - 1);
  }

  const changeTitle = () => {
    setState(prev => {
      return {
        ...prev,
        title: 'New bla bla!!!'
      }
    })
  }

  return (
    <div>
      <h1>Счетчик: {counter}</h1>
      <button onClick={increment} className="btn btn-success">Добавить</button>
      <button onClick={decrement} className="btn btn-danger">Убрать</button>
      <button onClick={changeTitle} className="btn btn-default">Убрать</button>
      <div>{JSON.stringify(state, null, 2)}</div>
    </div>
  );
}

export default App;
