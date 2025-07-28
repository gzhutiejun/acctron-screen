import { IProfile } from "../data-interface/data.interface";



export default function Profile(profile: IProfile) {
    const now: Date = new Date();
    const formattedTime = now.toLocaleTimeString('en-US');

    return (
          <div className="acc-right-top-container">
            <div className="acc-right-top-label">
              <text className="acc-right-top-label-title"> Date</text>
              <text className="acc-right-top-label-value"> {formattedTime}</text>
            </div>
            <div className="acc-right-top-label">
              <text className="acc-right-top-label-title"> Bramch</text>
              <text className="acc-right-top-label-value"> {profile.branch}</text>
            </div>
            <div className="acc-right-top-label">
              <text className="acc-right-top-label-title"> ATM ID</text>
              <text className="acc-right-top-label-value"> {profile.terminalId}</text>
            </div>
          </div>
  
    );
  }
  

  