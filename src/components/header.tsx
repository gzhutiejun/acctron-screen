import Profile from "./profile";

export default function Header() {
  return (
    <div className="acc-header ">
      <div className="acc-logo"></div>
      <label className="acc-header-bank">NCR Atleos Bank</label>
      <div className="header-center"></div>
      <Profile branch="0001" terminalId="12345678"></Profile>
    </div>
  );
}
