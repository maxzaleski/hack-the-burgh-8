import { HomeIcon, UserCircleIcon, QrcodeIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export default function Navbar() {
  const router = useRouter();
  const path = router.pathname;

  const NavButton = (props) => {
    return (
      <li
        className={`${
          path == props.path ? 'bg-blue-100' : ''
        } w-full h-full flex items-center justify-evenly`}>
        <Link href={props.path}>
          <button
            className="flex flex-col items-center"
            style={{
              fontSize: '90%',
              fontWeight: 'bold',
              color: path == props.path ? 'rgb(37, 99, 235)' : '',
              //textShadow: '-1px -1px 0 #acaaaa, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
            }}>
            {props.children}
          </button>
        </Link>
      </li>
    );
  };

  return (
    <nav
      className="text-xl"
      style={{ color: '#171717', borderTop: 'solid 1px rgb(203, 213, 225)' }}>
      <ul className="flex flex-row h-20 items-center justify-evenly">
        <NavButton path="/">
          <HomeIcon className="h-7 w-7" />
          Home
        </NavButton>
        <NavButton path="/scan">
          <QrcodeIcon className="h-7 w-7" />
          Scan
        </NavButton>
        <NavButton path="/profile">
          <UserCircleIcon className="h-7 w-7" />
          Profile
        </NavButton>
      </ul>
    </nav>
  );
}
