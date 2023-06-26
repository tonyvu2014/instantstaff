import { useRouter } from 'next/router';

import { Background } from '../background/Background';
import { Meta } from '../layout/Meta';
import { Section } from '../layout/Section';
import { Footer } from '../templates/Footer';
import { Menu } from '../templates/Menu';
import { AppConfig } from '../utils/AppConfig';

const Intro = () => {
  const router = useRouter();
  return (
    <div className="antialiased text-gray-600">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Background color="bg-gray-100">
        <Section yPadding="py-6">
          <Menu />
        </Section>

        <Section yPadding="pt-20 pb-32">
          <div className="flex flex-col flex-wrap justify-between items-center">
            <h2 className="mb-8 text-2xl font-semibold">
              Posting a job and applying for jobs with SpaceShift are easy
            </h2>
            <div className="flex flex-row justify-center items-center">
              <table className="shadow-lg bg-white">
                <tr>
                  <th className="bg-primary-300 border p-4">
                    <div className="flex items-center justify-center">
                      <img
                        width={'36px'}
                        src={`${router.basePath}/assets/images/employer.svg`}
                        alt="employer"
                      />
                      <span>Employer</span>
                    </div>
                  </th>
                  <th className="bg-primary-300 border p-4">
                    <div className="flex items-center justify-center">
                      <img
                        width={'36px'}
                        src={`${router.basePath}/assets/images/worker.svg`}
                        alt="worker"
                      />
                      <span>Jobseeker</span>
                    </div>
                  </th>
                </tr>
                <tr>
                  <td className="border p-4">
                    1. Login to the job portal and create a job
                  </td>
                  <td className="border p-4"></td>
                </tr>
                <tr>
                  <td className="border p-4"></td>
                  <td className="border p-4">
                    2. Receive the notification about the job which matches
                    his/her qualifications and location immediately
                  </td>
                </tr>
                <tr>
                  <td className="border p-4"></td>
                  <td className="border p-4">
                    3. View job details and accept the job
                  </td>
                </tr>
                <tr>
                  <td className="border p-4">
                    4. View profiles of all applicants
                  </td>
                  <td className="border p-4"></td>
                </tr>
                <tr>
                  <td className="border p-4">
                    5. Pick the best candidate for the job
                  </td>
                  <td className="border p-4"></td>
                </tr>
                <tr>
                  <td className="border p-4"></td>
                  <td className="border p-4">
                    6. Receive notification about his/her approved job and get
                    ready to work
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </Section>
      </Background>
      <Footer />
    </div>
  );
};

export default Intro;
