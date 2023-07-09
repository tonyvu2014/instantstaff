import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroButton } from '../hero/HeroButton';
import { Section } from '../layout/Section';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="pt-20 pb-32">
      <HeroButton
        title={
          <>
            {'On-demand staffing solution for\n'}
            <span className="text-primary-500">Child Care</span>
          </>
        }
        description="Connecting early learning centres with qualified casual educators in real-time."
        primaryButton={
          <Link href="/centers">
            <a>
              <Button xl primary>
                For Centres
              </Button>
            </a>
          </Link>
        }
        secondaryButton={
          <Link href="/workers">
            <a>
              <Button xl>For Educators</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
