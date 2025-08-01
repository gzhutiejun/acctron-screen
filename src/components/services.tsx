import FooterButton from "./footer-button";
import MenuButton from "./menu-button";

export default function Services() {
  const menuButtons = [
    { textId: "Balance", accessName: "Balance", iconStyle: "balance-inquiry" },
    {
      textId: "Withdrawal",
      accessName: "Withdrawal",
      iconStyle: "cash-withdrawal",
    },
    { textId: "Deposit", accessName: "Deposit", iconStyle: "cash-deposit" },
    { textId: "PIN change", accessName: "PINchange", iconStyle: "pin-change" },
    { textId: "Transfer", accessName: "Transfer", iconStyle: "transfer" },
  ];
  const footerButtons = [
    {
      accessName: "cancel",
      textId: "Common_Exit",
      iconStyle: "exit-session",
    },
        {
      accessName: "back",
      textId: "Common_Back",
      iconStyle: "back",
    },
  ];
  const dialogContentStyle = "row2 column4";
  const title = "Main Menu";
  return (
    <div className="acc-dialog-container">
      <div className="acc-dialog-content row2 column3">
        {menuButtons?.map((item) => {
          const { textId, iconStyle, accessName } = item;
          return (
            <MenuButton
              icon={iconStyle}
              accessName={accessName}
              label={textId}
              key={accessName}
              dispatchEvent={() => {}}
            />
          );
        })}
      </div>
      <div className="acc-dialog-footer">
        {footerButtons?.map((item) => {
          const { textId, iconStyle, accessName } = item;
          return (
            <FooterButton 
              icon={iconStyle}
              accessName={accessName}
              label={textId}
              key={accessName}
              dispatchEvent={() => {}}
            />
          );
        })}
      </div>
    </div>
  );
}
