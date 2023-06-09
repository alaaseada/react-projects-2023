import { useGlobalContext } from './Context';
import sublinks from './data';

function NavLinks() {
  const { openSubmenu } = useGlobalContext();

  return (
    <div className='nav-links'>
      {sublinks.map((item) => {
        return (
          <button
            key={item.pageId}
            className='nav-link'
            onMouseEnter={() => openSubmenu(item.pageId)}
          >
            {item.page}
          </button>
        );
      })}
    </div>
  );
}

export default NavLinks;
