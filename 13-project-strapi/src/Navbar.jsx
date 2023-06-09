import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './Context';
import NavLinks from './NavLinks';

function Navbar() {
  const { openSidebar, closeSubmenu } = useGlobalContext();
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('nav-link')) {
      closeSubmenu();
    }
  };
  return (
    <nav onMouseOver={handleSubmenu}>
      <div className='nav-center'>
        <h3 className='logo'>strapi</h3>
        <button className='menu-btn' onClick={openSidebar}>
          <FaBars />
        </button>
        <NavLinks />
      </div>
    </nav>
  );
}

export default Navbar;
