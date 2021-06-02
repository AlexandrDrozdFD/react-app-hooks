import React, {useState, useEffect, useRef} from 'react';

//сохраняет состояние при рендерах НО не вызывает сам рендер

const App = () => {
  const [value, setValue] = useState('initial');
  const renderCount = useRef(1);
  //если мы хотим изменить состояние и перерэндэрить используем useState
  //если мы хотим сохранить рендер между референциями используем useRef

  useEffect(() => {
    renderCount.current++
  })

  //__________________________________________________

  //с помощью реф мы можем получать ссылки на дом элементы:

  const inputRef = useRef(null);

  useEffect(() => {
    console.log(inputRef.current.value);
  })

  //__________________________________________________
  // ref часто используют для того, чтобы задавать фокусы на элементы:

  const focus = () => {
    inputRef.current.focus();
  }


  //__________________________________________________
  // с помощью  ref можем сохранять предыдущее состояние и как-то его использовать:

  const prevValue = useRef('');

  useEffect(() => {
    prevValue.current = value;
  }, [value])


  return (
    <div>
      <h1>Количество рендеров: {renderCount.current}</h1>
      <h2>Предыдущее значение: {prevValue.current}</h2>
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        ref={inputRef}
      />
      <button className="btn btn-primary" onClick={focus}>Focus</button>
    </div>
  );
}

export default App;
