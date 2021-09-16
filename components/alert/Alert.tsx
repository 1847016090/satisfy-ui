import React from "react";
import t from "prop-types";
import './style';
import { AlertProps, TypesMap } from "./Type";

const prefixCls = "satisfy-alert";

const types: TypesMap = {
  info: "#5352ED",
  positive: "#2ED573",
  negative: "#FF4757",
  warning: "#FFA502"
};

const Alert: React.FC<AlertProps> = props => {
  const { children, type = "info", ...rest } = props;
  return (
    <div
      className={prefixCls}
      style={{
        background: types[type]
      }}
      {...rest}
    >
      {children}
    </div>
  );
};

Alert.propTypes = {
  type: t.oneOf(["info", "positive", "negative", "warning"])
};

export default Alert;
