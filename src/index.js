import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const Desktop = React.lazy(() => import('./component/Desktop'));

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback || <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}

const App = React.memo(props => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Desktop />
        </React.Suspense>
      </ErrorBoundary>
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
