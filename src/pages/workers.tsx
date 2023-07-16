import { Background } from '../background/Background';
import { WorkersForm } from '../components/WorkersForm';
import { Meta } from '../layout/Meta';
import { Section } from '../layout/Section';
import { Footer } from '../templates/Footer';
import { Menu } from '../templates/Menu';
import { AppConfig } from '../utils/AppConfig';

const Workers = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <div className="sticky top-0 bg-white">
      <Section yPadding="py-6">
        <Menu />
      </Section>
    </div>
    <Background color="bg-gray-100">
      <Section yPadding="pt-20 pb-32">
        <WorkersForm />
      </Section>
    </Background>
    <Footer />
  </div>
);

export default Workers;
