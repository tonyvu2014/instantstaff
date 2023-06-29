import { Fragment } from 'react';

import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="What is SpaceShift?"
    description="SpaceShift is an innovative online marketplace that connects child care centers with the best candidates for their casual jobs through real-time notifications. With SpaceShift, care centers can quickly fill their shifts with qualified staff in a matter of minutes, while workers can easily find and apply for the most suitable job opportunities."
  >
    <VerticalFeatureRow
      title="Revolutionizing Child Care Staffing: The Advantages of Our Real-Time Marketplace"
      description="With SpaceShift, finding reliable workers for your last-minute positions has never been easier. Say goodbye to the headache of staffing and hello to hassle-free hiring."
      details={
        <Fragment>
          <p className="py-2">
            <span className="font-bold">
              1.Access to a larger pool of qualified workers:
            </span>{' '}
            By using our platform, child care centers can access a larger pool
            pool of qualified and vetted workers who are available for casual or
            part-time work. We&apos;ll do all the screening for you to save your
            time and resources needed for recruitment.
          </p>
          <p className="py-2">
            <span className="font-bold">2.Real-time notifications:</span>{' '}
            SpaceShift&apos;s real-time notifications can help child care
            centers centers to quickly and easily find workers when they need
            them.
          </p>
          <p className="py-2">
            <span className="font-bold">3.Reduced administrative burden:</span>{' '}
            Our platform could help to reduce the the administrative burden of
            managing casual jobs by allowing easy posting of availale positions,
            viewing and accepting applicant&apos;s profiles.
          </p>
        </Fragment>
      }
      image="/assets/images/connecting.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Unlocking Opportunities for Casual Workers: The Benefits of Joining Our Child Care Staffing Network"
      description="Are you looking for a hassle-free way to find job opportunities that match your qualifications and are conveniently located near your home? Our notification system sends you alerts about available positions that meet your criteria, so you never miss an opportunity again."
      details={
        <Fragment>
          <p className="py-2">
            <span className="font-bold">1.Flexibility:</span> Casual workers can
            choose their preferred working hours and days according to their
            schedule.
          </p>
          <p className="py-2">
            <span className="font-bold">2.Variety:</span> Our marketplace
            provides access to a wide range of child care centers, allowing
            workers to gain experience in different environments.
          </p>
          <p className="py-2">
            <span className="font-bold">3.Convenience:</span> With our real-time
            notification system, workers can receive alerts about available
            shifts and apply for them instantly from their mobile devices.
          </p>
          <p className="py-2">
            <span className="font-bold">4.Professional development:</span>Casual
            workers can learn new skills and gain experience in different
            aspects of child care through working in different centers.
          </p>
          <p className="py-2">
            <span className="font-bold">5.Build connections:</span> By working
            in multiple centers, workers can network with colleagues and
            potential employers, which can lead to future job opportunities.
          </p>
        </Fragment>
      }
      image="/assets/images/taking_care.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    {/* <VerticalFeatureRow
      title="Your title here"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    /> */}
  </Section>
);

export { VerticalFeatures };
