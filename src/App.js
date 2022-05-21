import { ToastContainer } from 'react-toastify';
import Navbar from './components/Layout/Navbar';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Navbar />
      <ToastContainer />
    </div>
  );
}

export default App;
