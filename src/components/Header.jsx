import Balance from "./Balance";
import LogoSVG from "../assets/logo.svg";

export default function Header() {
  return (
    <header className="header">
      <Balance />
      <img src={LogoSVG} alt="Logo" />
    </header>
  );
}
