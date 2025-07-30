import React, { useState } from "react";

export interface ButtonProps {
  /**
   * 事件名
   */
  eventName: string;
  /**
   * 是否只允许点击一次
   */
  oneTimeClick?: boolean;
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  btnkey?: string;
}

function Button({
  eventName,
  oneTimeClick = true,
  children,
  style,
  className,
  btnkey,
}: ButtonProps) {
  //const app = useApp();
  //转发自定义event到flow，可携带任意参数
  // app.dispatchEvent(EVENTS.CONFIRM,"asdf");
  const [hasClicked, setHasClicked] = useState(false);
  const handleClick = () => {
    if (!oneTimeClick || !hasClicked) {
      console.log("payload", eventName, btnkey);
      //const payloadKey = { key: btnkey };
      //app.dispatchEvent(eventName, payloadKey);
      if (oneTimeClick) {
        setHasClicked(true);
      }
    }
  };
  return (
    <button onClick={handleClick} style={style} className={className}>
      {children}
    </button>
  );
}

export default Button;
