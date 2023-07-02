import Link from 'next/link';

import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Menu = () => (
  <NavbarTwoColumns logo={<Logo xl />}>
    <li>
      <Link href="/intro">
        <a className="text-primary-300">How It Works</a>
      </Link>
    </li>
    <li>
      <Link href="/contact">
        <a className="text-primary-300">Contact Us</a>
      </Link>
    </li>
  </NavbarTwoColumns>
);

export { Menu };
