import React, { useEffect, useState, memo } from 'react';
import { createPortal } from 'react-dom';
import classnames from 'classnames';

export interface PopupProps {
  /** 弹窗显示状态 */
  visible?: boolean;
  /** 子元素 */
  children?: any;
  /** 点击遮罩关闭 */
  clickMaskClose?: boolean;
  /** 弹窗弹出位置 */
  placement?: 'top' | 'bottom';
  /** 关闭事件 */
  onClose?: () => void;
}

// todo 优化！！！！每次点开都会重新创建新的弹窗！！！
/** 弹出层组件 */
const Popup: React.FC<PopupProps> = memo(props => {
  /** Props 参数 */
  const { visible = false, children, clickMaskClose = true, placement = 'bottom' } = props;
  /** 控制弹窗显示状态 */
  const [popVisible, setPopVisible] = useState<boolean>(false);

  /** 初始化创建父节点 */
  const containerNode: HTMLDivElement = document.createElement('div');
  document.body.appendChild(containerNode);

  /** 组件卸载时移除创建的节点 */
  useEffect(() => {
    if (containerNode) {
      document.body.removeChild(containerNode);
    }
  }, []);

  /** 监听Props中的visible */
  useEffect(() => {
    setPopVisible(visible);
  }, [visible]);

  /** 点击遮罩事件 */
  const onClickMask = (e: any) => {
    e.stopPropagation();
    if (props.onClose && clickMaskClose) {
      props.onClose();
      return;
    }
    if (clickMaskClose) {
      setPopVisible(false);
    }
  };

  /** 创建在父节点以外 */
  return createPortal(
    <div className={classnames('satisfy-popup-mask', { hide: !popVisible })} onClick={onClickMask}>
      <div
        className={classnames('satisfy-popup-body', 'fadeIn', {
          [`satisfy-popup-body-position-${placement}`]: true,
          'fade-bottom-in': placement === 'bottom',
          'fade-top-in': placement === 'top',
        })}
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    containerNode,
  );
});

export default Popup;
