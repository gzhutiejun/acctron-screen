import classNames from "classnames";
import { ButtonProps } from "../data-interface/data.interface";

export default function Button(props: ButtonProps) {
  const buttonClassName = classNames([
    "acc-button",
    props.classList,
    props.iconStyle ? "icon" : "",
  ]);

  return (
    <button className={buttonClassName}>
      <div>
        {props.iconStyle && (
          <div className={classNames(["acc-icon", props.iconStyle])}></div>
        )}
        {props.textId}
      </div>
    </button>
  );
}
