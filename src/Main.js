import React from 'react';
import {useAlert} from "./alert/AlertContextForReducer";

export default function Main() {
  const {show} = useAlert();

  return (
    <>
      <h1>Привет в примере с Context</h1>
      <button onClick={() => show('Text from Main.js')} className="btn btn-success">Показать alert</button>
    </>
  )
}