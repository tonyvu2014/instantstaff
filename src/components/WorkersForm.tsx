import { Component } from 'react';

class WorkersForm extends Component {
  render() {
    return <div id="ff-compose"></div>;
  }

  componentDidMount() {
    const script = document.createElement('script');
    script.id = 'ff-script';
    script.src =
      'https://formfacade.com/include/110581543394745721401/form/1FAIpQLSe4IDtWsUwwE34aQxhr22_oc3SY2Z9_E9DITbokoeCIOE-gsg/classic.js?div=ff-compose';
    script.defer = true;
    script.async = true;
    document.body.appendChild(script);
  }
}

export { WorkersForm };
