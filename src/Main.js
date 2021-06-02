import React from 'react';
import {useAlert} from "./alert/AlertContextForReducer";

export default function Main() {
  const toggle = useAlert();

  return (
    <>
      <h1>Привет в примере с Context</h1>
      <button onClick={toggle.show} className="btn btn-success">Показать alert</button>
    </>
  )
}