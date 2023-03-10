import Link from 'next/link';

import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Menu = () => (
  <NavbarTwoColumns logo={<Logo xl />}>
    <li>
      <Link href="/intro">
        <a>How It Works</a>
      </Link>
    </li>
    <li>
      <Link href="/contact">
        <a>Contact Us</a>
      </Link>
    </li>
  </NavbarTwoColumns>
);

export { Menu };
