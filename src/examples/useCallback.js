import React, {useState, useCallback} from 'react';
import ItemsList from '../items.list';

//принцип как у useMemo => решает вопрос оптимизации
// НО есть отличие. useCallback возвращает саму функцию (callback), а не результат функции.
// А useMemo возвращает результат функции

const App = () => {
  const [colored, setColored] = useState(false);
  const [count, setCount] = useState(0);

  const styles = {
    color: colored ? 'darkred' : 'black'
  }

  const generateItemsFromAPI = useCallback((number) => {
    return new Array(count).fill('').map((_, i) => `Element: ${i + number}`);
  }, [count])

  return (
    <div>
      <h1 style={styles}>Количество элементов: {count}</h1>
      <button className={'btn btn-success'} onClick={() => setCount(prev => prev + 1)}>Добавить</button>
      <button className={'btn btn-warning'} onClick={() => setColored(prev => !prev)}>Изменить</button>
      <ItemsList  getItems={generateItemsFromAPI}/>
    </div>
  );
}

export default App;