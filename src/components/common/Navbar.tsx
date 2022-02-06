import { HomeIcon, QrcodeIcon, UserCircleIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export default function Navbar() {
  const router = useRouter();
  const path = router.pathname;

  const NavButton = (props) => {
    return (
      <Link href={props.path}>
        <li
          className={`${
            path == props.path ? 'bg-blue-100' : ''
          } w-full h-full flex items-center justify-evenly`}>
          <button
            className={`${path == props.path ? 'text-blue-600' : ''} flex flex-col items-center`}
            style={{
              fontSize: '90%',
              fontWeight: 'bold',
              //textShadow: '-1px -1px 0 #acaaaa, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
            }}>
            {props.children}
          </button>
        </li>
      </Link>
    );
  };

  return (
    <nav className="text-xl text-neutral-900" style={{ borderTop: 'solid 1px rgb(203, 213, 225)' }}>
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
