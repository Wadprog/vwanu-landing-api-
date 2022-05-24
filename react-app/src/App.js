import { Provider } from 'react-redux';

// Custom dependencies
import { store } from './store';
import Routes from './layouts/Routes.js';

import './assets/plugins/nucleo/css/nucleo.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
// import './assets/css/react.min.css'; will import in admin layout and in auth wrapper 
// import 'react-date-range/dist/styles.css'; // main style file
// import 'react-date-range/dist/theme/default.css'; // theme css file

const App = () => {
  return (
    <Provider store={store}>
    <Routes/>
    </Provider> 
  );
};

export default App;
