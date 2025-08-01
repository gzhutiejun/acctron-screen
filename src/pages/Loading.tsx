import Header from "../components/header";

export default function Loading() {
  return (
    <div className="acc-screen">
      <Header></Header>
      <div className="acc-body-container">
        <div className="acc-dialog small">
          <div className="two-column-grid">
            <div className={"acc-animation loader"}></div>

            <div className="label-box">
              <label className="label-top">Out of Service</label>
              <label className="label-bottom">
                Application is loading, please wait...
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
