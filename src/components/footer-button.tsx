import classNames from "classnames";
import { MenuButtonProps } from "../data-interface/data.interface";

export default function FooterButton(props: MenuButtonProps) {
 const iconClassList = classNames(["acc-icon", props.icon]);
console.log(props);
  return (
    <div className="acc-button footer">
      <button type="button">
        <span className={iconClassList} />
        <span className="acc-text upper">{props.label}</span>
      </button>
    </div>
  );
}
