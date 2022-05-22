import { ToastContainer } from 'react-toastify';
import Navbar from './components/Layout/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import { QueryClientProvider, QueryClient } from 'react-query';
import 'react-toastify/dist/ReactToastify.css';

const client = new QueryClient();

function App() {
  return (
    <div>
      <Navbar />
      <QueryClientProvider client={client}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </QueryClientProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
