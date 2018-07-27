import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table-next.min.js';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
