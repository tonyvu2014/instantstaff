import { Component } from 'react';

class ContactForm extends Component {
  render() {
    return <div id="ff-compose"></div>;
  }

  componentDidMount() {
    const script = document.createElement('script');
    script.id = 'ff-script';
    script.src =
      'https://formfacade.com/include/110581543394745721401/form/1FAIpQLSfdmvyuXW5fcQMKt4z3rPOf9Ewx0o1-9P4lDq9ZsL0-OY8sWA/classic.js?div=ff-compose';
    script.defer = true;
    script.async = true;
    document.body.appendChild(script);
  }
}

export { ContactForm };
