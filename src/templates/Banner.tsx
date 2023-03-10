import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Join our community today and experience the benefits of InstantStaff."
      subtitle="Let us help you find the right worker or the perfect job!"
      primaryButton={
        <Link href="/centers">
          <a>
            <Button primary>I want to hire</Button>
          </a>
        </Link>
      }
      secondaryButton={
        <Link href="/workers">
          <a>
            <Button>I want to work</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
