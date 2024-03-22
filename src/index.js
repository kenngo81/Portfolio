import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const Desktop = React.lazy(() => import('./component/Desktop'));
const Mobile = React.lazy(() => import('./component/Mobile'));

const App = React.memo(props => {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 500);

  React.useEffect(() => {
    const onResize = () => {
      setIsMobile(window.innerWidth < 500);
    };
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <BrowserRouter>
      <React.Suspense fallback={<div>Loading...</div>}>
        {isMobile ? <Mobile /> : <Desktop />}
      </React.Suspense>
    </BrowserRouter>
  );
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
