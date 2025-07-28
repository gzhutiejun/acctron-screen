import Profile from "./profile";

export default function Header() {

    return (
      <div className="acc-screen">
        <div className="acc-header ">
          <div className="acc-logo"></div>
          <text className="acc-header-bank">NCR Bank</text>
          <Profile></Profile>
        </div>
      </div>
    );
  }
  