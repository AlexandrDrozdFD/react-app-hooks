import React from 'react';

import {useAlert} from "./AlertContextForReducer";

export default function Alert() {

  const alert = useAlert();

  if (!alert.visible) {
    return null;
  }

  return (
    <div className={'alert alert-danger'} onClick={alert.hide}>
      Очень важное сообщение
    </div>
  );
}