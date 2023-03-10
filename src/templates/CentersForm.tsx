import { Component } from 'react';

class CentersForm extends Component {
  render() {
    return <div id="ff-compose"></div>;
  }

  componentDidMount() {
    const script = document.createElement('script');
    script.id = 'ff-script';
    script.src =
      'https://formfacade.com/include/110581543394745721401/form/1FAIpQLSfJrfLMcSwgSWUHU0zfzfwJWpVIhbgAGsswf35anEO3jCrc9A/classic.js?div=ff-compose';
    script.defer = true;
    script.async = true;
    document.body.appendChild(script);
  }
}

export { CentersForm };
