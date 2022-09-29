import logo from '../assets/img/Logo.svg'
import '../assets/style/header.css'
import Menu from "./headerComponents/menu.jsx"

function Header() {
  return (
    <header>
      <div className='menu-completo'><img src={logo}></img>
        <Menu></Menu></div>
    </header>
  );
}
export default Header;
