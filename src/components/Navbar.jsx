import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="border-2 bg-red-300">
      <h2>Captioneer</h2>
      <ul>
        <li>
          <Link href="/profile">Profile</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
