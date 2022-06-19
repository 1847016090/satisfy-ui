import React, { useState } from 'react';
import Visible from '../';

export default function() {
  const [visible, setVisible] = useState<boolean>(true);
  return (
    <>
      <button onClick={() => setVisible(!visible)}>点击看看效果</button>
      <Visible visible={visible}>我是Visible组件</Visible>
    </>
  );
}
