import EmvLabel from "../components/emv-label";
import Footer from "../components/footer";
import Header from "../components/header";
import Services from "../components/services";

export default function MainMenu() {
  return (
    <div className="acc-screen">
      <Header></Header>
      <EmvLabel label="Visa Credit"></EmvLabel>
      <Services></Services>
      <Footer></Footer>
    </div>
  );
}
