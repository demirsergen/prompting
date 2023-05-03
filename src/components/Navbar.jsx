import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className=" bg-gray-100  p-4 w-full">
      <div className="flex justify-between mx-auto w-2/3">
        <h2>Captioneer</h2>
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
