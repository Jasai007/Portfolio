import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  mobile?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, mobile }) => {
  const baseClasses = "font-medium hover:text-indigo-600 transition-colors";
  const mobileClasses = "block px-3 py-2 text-base text-gray-700 hover:bg-gray-100 rounded-md";
  const desktopClasses = "text-gray-700";

  return (
    <a 
      href={href}
      className={`${baseClasses} ${mobile ? mobileClasses : desktopClasses}`}
      onClick={(e) => {
        e.preventDefault();
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }}
    >
      {children}
    </a>
  );
};

export default NavLink;