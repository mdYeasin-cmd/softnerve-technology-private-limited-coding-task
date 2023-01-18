import { RouterProvider } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { router } from './routes/Router/Router';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
