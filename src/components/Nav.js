import { useRouter } from 'next/router';
import Link from 'next/link';
import React from 'react';

const Nav = () => {
  const { pathname } = useRouter();
  return (
    <>
      <nav>
        <Link href='/'>
          <a className={pathname === '/' ? 'kadihill active' : 'kadihill'}>Kadi Hill</a>
        </Link>
        <ul>
          <li>
            <Link href='/about'>
              <a className={pathname === '/about' ? 'active' : null}>About</a>
            </Link>
          </li>
          <li>
            <Link href='/blog'>
              <a className={pathname.startsWith('/blog') ? 'active' : null}>Blog</a>
            </Link>
          </li>
          <li>
            <Link href='/contact'>
              <a className={pathname === '/contact' ? 'active' : null}>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
      <style jsx>{`
        nav {
          border-bottom: 2px solid rgba(170, 30, 30, 0.1);
          display: flex;
          flex-direction: row;
          font-size: 4vmin;
          font-weight: 300;
          padding: 1em 1em 0 1em;
          margin: 0 1em;
        }
        ul {
          align-items: flex-end;
          display: flex;
          flex-direction: row;
          flex-grow: 3;
          justify-content: space-around;
          list-style: none;
        }
        li {
          margin-left: 1em;
        }
        nav > a {
          flex-grow: 1;
          font-size: 1.3em;
          font-weight: 800;
        }
        a {
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          color: inherit;
          display: block;
          outline: 0;
          padding: 0.1em 0.2em 0 0.2em;
          text-decoration: none;
          text-transform: capitalize;
        }
        a:not(.kadihill):first-letter {
          font-size: 1.1em;
        }
        a:not(.active):hover {
          display: inline-block;
          position: relative;
        }
        a:not(.active):hover:after {
          background-color: rgb(134, 134, 134);
          bottom: -2px;
          content: '';
          display: block;
          height: 2px;
          position: absolute;
          width: 4.35em;
        }
        a:not(.kadihill):not(.active):hover:after {
          width: calc(100% - 0.4em);
        }
        .active {
          display: inline-block;
          position: relative;
        }
        .active:after {
          background-color: rgb(160, 214, 180);
          bottom: -2px;
          content: '';
          display: block;
          height: 4px;
          position: absolute;
          width: 4.35em;
        }
        .active:not(.kadihill):after {
          width: calc(100% - 0.4em);
        }
      `}</style>
    </>
  );
};

export default Nav;