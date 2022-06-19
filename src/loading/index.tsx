import React from 'react';

/** Loading组件Props参数接口 */
interface LoadingProps {
  /** @name 显示还是隐藏 */
  visible?: boolean;
}

const createLoading = () => {};

/** @name 加载组件 */
const Loading = (props: LoadingProps) => {
  return <div>Loading...</div>;
};

export default Loading;
