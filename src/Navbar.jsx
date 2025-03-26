import { useRef, useState } from 'react';
import { links, social } from './data';
import logo from './logo-vz.png';
import { FaBars } from 'react-icons/fa6';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksRef = useRef();

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const linkStyles = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : '0px',
  };

  return (
    <nav>
      <div className='navCenter'>
        <div className='navHeader'>
          <img src={logo} className='logo' alt='logo' />
          <button className='navToggle' onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className='linksContainer' style={linkStyles}>
          <ul className='links' ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <ul className='socialIcons'>
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
