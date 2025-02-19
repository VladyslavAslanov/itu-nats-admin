import ReactDOM from 'react-dom/client'

import App from './App';
import AppContextProvider from './context/AppContextProvider'
import { BrowserRouter } from 'react-router-dom'

// global css
import "./index.css"
import 'react-datepicker/dist/react-datepicker.module.css'
import "react-datetime/css/react-datetime.css"
import 'react-loading-skeleton/dist/skeleton.css'
import 'react-toastify/dist/ReactToastify.css';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </BrowserRouter>
);
