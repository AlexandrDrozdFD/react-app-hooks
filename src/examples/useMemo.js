import React, {useState, useEffect, useRef, useMemo} from 'react';

// useMemo позволяет оптимизировать приложение
// НО! следует учесть, что его надо вызывать, когда действительно есть вопрос с производительностью

function complexCompute(num) {
  console.log('complexCompute')
  let i = 0
  while (i < 1000000000) i++
  return num * 2
}

const App = () => {
  const [number, setNumber] = useState(42);
  const [colored, setColored] = useState(false);

  const styles = useMemo(() => ({
    color: colored ? 'darkred' : 'black'
  }), [colored]);
  // useMemo сохранил этот объект для следующего рендера. Если без мемо то создаётся новый обьъект при каждом рендере

  const computed = useMemo(() => {
    return complexCompute(number)
  }, [number]);
  // закэшировали. То есть при изменении number функция complexCompute вызывается, а
  // при изменении цвета нет. Оптимизировали.

  useEffect(() => {
    console.log('Styles changed')
  }, [styles]);

  return (
    <div>
      <h1 style={styles}>Вычисляемое свойство: {computed}</h1>
      <button className={'btn btn-success'} onClick={() => setNumber(prev => prev + 1)}>Добавить</button>
      <button className={'btn btn-danger'} onClick={() => setNumber(prev => prev - 1)}>Убрать</button>
      <button className={'btn btn-warning'} onClick={() => setColored(prev => !prev)}>Изменить</button>
    </div>
  );
}

export default App;