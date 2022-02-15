import './App.css';
import { HashRouter } from 'react-router-dom';
import AppRouter from '../appRouter/AppRouter';

function App() {
  return (
    <HashRouter>
      <div className="app" data-test-id='app' >
        {/* <AppRouter /> */}
      </div>
    </HashRouter>
  );
}

export default App;
