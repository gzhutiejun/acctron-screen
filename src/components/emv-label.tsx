import { IEmvData } from "../data-interface/data.interface";

export default function EmvLabel(emvData: IEmvData) {
  return (
    <div className="emv-label-container">
      <label className="emv-label-message">EMV App:  {emvData.label}</label>
    </div>
  );
}
