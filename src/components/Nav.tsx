import Link from 'next/link';
import React from 'react';

const Nav = () => {
  return (
    <nav>
      <ul className="flex gap-10 items-center justify-center rounded-2xl border-solid mb-8">
        <li className="text-center">
          <Link href="/SSG">SSG</Link>
        </li>
        <li>
          <Link href="/ISR">ISR</Link>
        </li>
        <li>
          <Link href="/SSR">SSR</Link>
        </li>
        <li>
          <Link href="/CSR">CSR</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
