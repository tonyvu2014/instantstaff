import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroButton } from '../hero/HeroButton';
import { Section } from '../layout/Section';
import { Menu } from './Menu';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <Menu />
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroButton
        title={
          <>
            {'On-demand staffing marketplace for\n'}
            <span className="text-primary-500">Child Care and Aged Care</span>
          </>
        }
        description="Connecting child and aged care centers with qualified casual workers in real-time."
        primaryButton={
          <Link href="/centers">
            <a>
              <Button xl primary>
                For Care Centers
              </Button>
            </a>
          </Link>
        }
        secondaryButton={
          <Link href="/workers">
            <a>
              <Button xl>For Casual Workers</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
