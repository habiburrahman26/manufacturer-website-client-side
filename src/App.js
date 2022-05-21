import { ToastContainer } from 'react-toastify';
import Navbar from './components/Layout/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home/Home';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
