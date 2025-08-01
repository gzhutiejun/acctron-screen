import classNames from "classnames";
import { MenuButtonProps } from "../data-interface/data.interface";

export default function MenuButton(props: MenuButtonProps) {
  const iconClassList = classNames(["acc-icon large", props.icon]);
  return (
    <div className="acc-button touch">
      <button type="button">
        {props.icon && <span className={iconClassList}></span>}
        <div className="acc-text">{props.label}</div>
      </button>
    </div>
  );
}
