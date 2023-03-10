import { Background } from '../background/Background';
import { ContactForm } from '../components/ContactForm';
import { Meta } from '../layout/Meta';
import { Section } from '../layout/Section';
import { Footer } from '../templates/Footer';
import { Menu } from '../templates/Menu';
import { AppConfig } from '../utils/AppConfig';

const Contact = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Background color="bg-gray-100">
      <Section yPadding="py-6">
        <Menu />
      </Section>

      <Section yPadding="pt-20 pb-32">
        <ContactForm />
      </Section>
    </Background>
    <Footer />
  </div>
);

export default Contact;
