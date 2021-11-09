import React, { useState } from 'react';
import Popup from '../';

export default function() {
  const [bottobVisible, setBottomVisible] = useState<boolean>(false);
  const [topVisible, setTopVisible] = useState<boolean>(false);

  return (
    <>
      <button onClick={() => setBottomVisible(true)}>底部弹窗</button>
      <button onClick={() => setTopVisible(true)}>顶部弹窗</button>
      <Popup onClose={() => setBottomVisible(false)} visible={bottobVisible}>
        2222222
      </Popup>
      <Popup onClose={() => setTopVisible(false)} visible={topVisible} placement="top">
        2222222
      </Popup>
    </>
  );
}
