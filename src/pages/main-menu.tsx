import Button from "../components/button";
import EmvLabel from "../components/emv-label";
import Footer from "../components/footer";
import Header from "../components/header";

import EVENTS from "../data-interface/events";

export default function MainMenu() {
  return (
    <div className="acc-screen">
      <Header></Header>
      <EmvLabel label="Visa Credit"></EmvLabel>
        <div className="selectMenu">
          <div className="buttons">
            <Button
              className="idle-select-button line1-1 font-22"
              eventName={EVENTS.CUSTOMER_SELECT.WITHDRAWAL}
            >
              <img src="./assets/icons/首页卡片图标.svg"></img>
              <div>取款</div>
            </Button>
            <Button
              className="idle-select-button line1-2 font-22"
              eventName={EVENTS.CUSTOMER_SELECT.DEPOSIT}
            >
              <img src="./assets/icons/首页卡片图标-1.svg"></img>
              <div>存款</div>
            </Button>
            <Button
              className="idle-select-button line1-3 font-22"
              eventName={EVENTS.CUSTOMER_SELECT.TRANSFER}
            >
              <img src="./assets/icons/首页卡片图标-2.svg"></img>
              <div>转账</div>
            </Button>
            <Button
              className="idle-select-button line2-1 font-22"
              eventName={EVENTS.CUSTOMER_SELECT.BALANCE}
            >
              <img src="./assets/icons/首页卡片图标-3.svg"></img>
              <div>查询</div>
            </Button>
            <Button
              className="idle-select-button line2-2 font-22"
              eventName={EVENTS.CUSTOMER_SELECT.PASSBOOK}
            >
              <img src="./assets/icons/首页卡片图标-4.svg"></img>
              <div>存折业务</div>
            </Button>
            <Button
              className="idle-select-button line2-3 font-22"
              eventName={EVENTS.CUSTOMER_SELECT.ACCOUNT}
            >
              <img src="./assets/icons/首页卡片图标-5.svg"></img>
              <div>账户管理</div>
            </Button>
            <Button
              className="idle-select-button-more font-22"
              eventName={EVENTS.CUSTOMER_SELECT.MORE_SERVICE}
            >
              <div id="icon-box">
                <img id="icon" src="./assets/icons/首页卡片图标-6.svg"></img>
                <div>更多服务</div>
              </div>
            </Button>
          </div>

        </div>
      <Footer></Footer>
    </div>
  );
}
