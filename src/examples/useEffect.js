import React, {useState, useEffect} from 'react';

const App = () => {
  const [type, setType] = useState('users');
  const [data, setData] = useState([]);
  const [pos, setPos] = useState({
    x: 0,
    y: 0
  });

  //__________________________
  // useEffect(() => {
  //   console.log('called useEffect when rendered component');
  // });

  // хук useEffect без второго параметра ([]) вызывается каждый раз, когда у нас происходит рендер компонента

  //__________________________
  // useEffect(() => {
  //   console.log('type was changed to ', type);
  // }, [type]);

  // второй параметр - dependencies,
  // где мы указываем от чего должен зависеть наш useEffect (от изменения чьего состояния он зависит
  // и при изменении этого состояния будет вызываться);
  //__________________________

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(json => setData(json));

    return () => {
      console.log('clean up function'); // например: чистим (вызываем clean up function) если потом ещё раз обращаемся к api
    }
  }, [type])

  //__________________________

  // с помощью useEffect можем эмулировать некоторые лайсайл хуки:

  useEffect(() => {
    console.log('ComponentDidMount');
  }, [])

  //Передаём пустой массив для того, чтобы один раз вызвавшись этот колбэк больше не вызывался

  //__________________________

  //Лубые слушатели, которые мы добаляем их нужно удалять:

  const mousePosition = (e) => {
    setPos({
      x: e.clientX,
      y: e.clientY
    })
  };

  useEffect(() => {
    window.addEventListener('mousemove', mousePosition);

    return () => {
      window.removeEventListener('mousemove', mousePosition)
    }
  }, []);
  //возвращаем функцию, которая очищает слушатель, когда заканчивается действие useEffect


  return (
    <div>
      <h1>Ресурс: {type}</h1>
      <button onClick={() => setType('users')}>Пользователи</button>
      <button onClick={() => setType('todos')}>ToDos</button>
      <button onClick={() => setType('posts')}>Посты</button>
      {/*<div>{JSON.stringify(data)}</div>*/}
      <div>{JSON.stringify(pos)}</div>
    </div>
  );
}

export default App;
