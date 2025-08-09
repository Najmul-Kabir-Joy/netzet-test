import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { NAV_ITEMS } from './navbar.constants';

const LargeScreenNav: React.FC = () => (
  <div className="hidden md:flex flex-row justify-between px-6 large-nav">
    <div className="relative w-[173px] h-[74px] logo">
      <Image
        src="/fametonic-logo.svg"
        alt="Fametonic logo"
        fill
        priority
        className="object-contain"
      />
    </div>
    <nav className="pl-[110px] text-text-primary navigation">
      <ul className="flex gap-10 font-primary font-semibold text-lg text-text-muted navigation-items">
        {NAV_ITEMS.map((item) => (
          <li className="cursor-pointer navigation-item" key={item.key}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  </div>
);

export default LargeScreenNav;
