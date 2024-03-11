import Link from 'next/link';
import React from 'react';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="">SSG</Link>
        </li>
        <li>
          <Link href="">ISR</Link>
        </li>
        <li>
          <Link href="">SSR</Link>
        </li>
        <li>
          <Link href="">CSR</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
