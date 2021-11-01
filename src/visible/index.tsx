/** Visible组件Props参数接口 */
interface VisibleProps {
  /** @name 显示还是隐藏 */
  visible?: boolean;
  /** @name 子元素 */
  children?: any;
}

/** @name 控制组件的显示或者隐藏 */
const Visible: React.FC<VisibleProps> = props => {
  const { visible, children } = props;
  return visible ? children : null;
};

export default Visible;
