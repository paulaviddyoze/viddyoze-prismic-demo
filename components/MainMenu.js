import React from 'react';
import { default as NextLink } from 'next/link';
import { menuStyles } from 'styles';
import { RichText } from 'prismic-reactjs';
import { hrefResolver, linkResolver } from 'prismic-configuration';

const MainMenu = ({ menu = [] }) => {
  return (
    <nav className="main-menu">
      <ul>
        <li>
          <NextLink href="/">
            <a>Home</a>
          </NextLink>
        </li>
        <li>
          <NextLink href="/blog">
            <a>Blog</a>
          </NextLink>
        </li>
        {menu?.length &&
          menu.map((menuLink, index) => (
            <li key={`menuLink-${index}`}>
              <NextLink
                as={linkResolver(menuLink.link)}
                href={hrefResolver(menuLink.link)}
              >
                {RichText.asText(menuLink.label)}
              </NextLink>
            </li>
          ))}
      </ul>
      <style jsx global>
        {menuStyles}
      </style>
    </nav>
  );
};
export default MainMenu;
