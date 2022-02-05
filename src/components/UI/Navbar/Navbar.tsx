import { HomeIcon, UserCircleIcon, QrcodeIcon } from '@heroicons/react/outline'
import React, { ReactPropTypes } from 'react';

const NavIcon = (props: ReactPropTypes) => {
  return <li></li>;
};

export default function Navbar() {
  return (
    <nav className="bg-blue-500 text-xl px-7">
      <ul className="flex flex-row h-20 justify-between items-center">
        <li className="flex flex-col items-center">
            <HomeIcon className='h-7 w-7' />
            Home
        </li>
        <li className="flex flex-col items-center">
            <QrcodeIcon className='h-7 w-7' />
            Scan
        </li>
        <li className="flex flex-col items-center">
            <UserCircleIcon className='h-7 w-7' />
            Profile
        </li>
      </ul>
    </nav>
  );
}
