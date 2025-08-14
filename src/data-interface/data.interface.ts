import { CommFunc } from "../types/acc";

export interface IProfile {
  terminalId?: string;
  branch?: string;
}

export interface IEmvData {
  label?: string;
  aid?: string;
}

export interface ButtonData {
  textId: string;
  accessName?: string;
  multiClickable?: boolean;
  lang?: string;
  disabled?: boolean;
}
export interface TouchButtonData extends ButtonData {
  classList?: string | string[];
  iconStyle?: string | string[];
  onClick?: () => void;
}

export interface ButtonProps extends TouchButtonData {
  hidden?: boolean;
  icon?: string;
  width?: string;
  attributes?: HTMLButtonElement;
  handleClick?: CommFunc;
}

export interface ImageButtonsProps {
  buttonsProps: ButtonProps[];
}

export
interface MenuButtonProps {
  icon: string | string[] | undefined;
  label: string;
  accessName: string | undefined;
  dispatchEvent(event: string, accessName: string): void;
}