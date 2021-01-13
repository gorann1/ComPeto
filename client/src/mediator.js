import { render } from 'react-dom';
import router from './router.jsx';

const mediator = {
  name: 'John Doe',
  sidebar: false,
  render: () => {
    render(router(mediator), document.getElementById('layout'));
  }
};

module.exports = mediator;