import { Background } from '../background/Background';
import { Meta } from '../layout/Meta';
import { Section } from '../layout/Section';
import { CentersForm } from '../templates/CentersForm';
import { Footer } from '../templates/Footer';
import { Menu } from '../templates/Menu';
import { AppConfig } from '../utils/AppConfig';

const Centers = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Background color="bg-gray-100">
      <Section yPadding="py-6">
        <Menu />
      </Section>

      <Section yPadding="pt-20 pb-32">
        <CentersForm />
      </Section>
    </Background>
    <Footer />
  </div>
);

export default Centers;
