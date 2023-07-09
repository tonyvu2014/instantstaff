import Link from 'next/link';
import { useRouter } from 'next/router';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroButton } from '../hero/HeroButton';
import { Section } from '../layout/Section';

const Hero = () => {
  const router = useRouter();

  return (
    <Background color="bg-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <img
            src={`${router.basePath}/assets/images/children_learning.jpg`}
            alt="childcare"
          />
        </div>
        <Section yPadding="py-4">
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
      </div>
    </Background>
  );
};

export { Hero };
