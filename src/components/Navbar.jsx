import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className=" bg-gray-900 text-white  p-4 w-full">
      <div className="flex justify-between mx-auto w-2/3">
        <Link href="/">Captioneer</Link>
        <ul>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
