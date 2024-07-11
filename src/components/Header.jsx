import React, { useEffect, useState } from 'react';
import { MdClose, MdMenu } from "react-icons/md";
import provision from '../assets/bg-removed-logo.png';
import { links } from '../utils/constant';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setOpenMenu(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          const id = entry.target.id;
          setActiveLink(id.charAt(0).toUpperCase() + id.slice(1).replace('-', ' '));
        }
      });
    }, { threshold: 0.5 });

    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <header className={`fixed inset-0 flex items-center h-[64px] md:h-[80px] z-[990] transition-all duration-500 ${scrolled ? (!openMenu ? 'bg-darkBlue md:!h-[64px] opacity-80' : 'bg-darkBlue md:!h-[64px]') : 'bg-darkBlue'} `}>
      <div className='flex justify-between items-center px-3 xl:max-w-[1140px] mx-auto w-full'>
        <div>
          <img src={provision} className='min-w-20 w-20 h-full' alt="Logo" />
        </div>
        <nav className={`${openMenu ? 'navbar-mobile' : 'relative'} flex items-center`}>
          <ul className={`hidden lg:flex items-center divide-y md:divide-y-0`}>
            {links.map((item) => (
              <li key={item.title}>
                <a
                  href={item.href}
                  className={`py-5 px-3 ${activeLink === item.title ? 'text-accent' : 'lg:text-white'}`}
                  onClick={() => handleLinkClick(item.title)}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <a href='#contact' className='px-3 lg:px-6 py-1.5 lg:py-2 ml-0 lg:ml-6 mr-4 lg:mr-0 rounded-full bg-accent text-white transition-all duration-200 cursor-pointer hover:bg-secondary'>
            Get Started
          </a>
          <MdMenu size={24} className='lg:hidden text-white cursor-pointer' onClick={() => setOpenMenu(!openMenu)} />
          {openMenu && (
            <MdClose size={23} className='lg:hidden absolute text-white top-[15px] right-[15px] z-[9998] cursor-pointer' onClick={() => setOpenMenu(!openMenu)} />
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;


/**
 *  <li><a href='#home' className='py-5 px-3 lg:text-white' onClick={() => handleLinkClick()}>Home</a></li>
            <li><a href='#about' className='py-5 px-3 lg:text-white' onClick={() => handleLinkClick()}>About</a></li>
            <li><a href='#services' className='py-5 px-3 lg:text-white' onClick={() => handleLinkClick()}>Services</a></li>
            <li><a href='#choose-us' className='py-5 px-3 lg:text-white' onClick={() => handleLinkClick()}>Why Us</a></li>
            <li><a href='#contact' className='py-5 px-3 lg:text-white' onClick={() => handleLinkClick()}>Contact</a></li> 
 */