import Profile from "./profile";

export default function Header() {

    return (
      <div className="acc-screen">
        <div className="acc-header ">
          <div className="acc-logo"></div>
          <label className="acc-header-bank">NCR Bank</label>
          <Profile branch="0001" terminalId="12345678"></Profile>
        </div>
      </div>
    );
  }
  