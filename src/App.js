import { ToastContainer } from 'react-toastify';
import Navbar from './components/Layout/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import { QueryClientProvider, QueryClient } from 'react-query';
import 'react-toastify/dist/ReactToastify.css';
import Login from './components/Pages/Login/Login';
import SignUp from './components/Pages/Signup/SignUp';
import Purchase from './components/Pages/Purchase/Purchase';
import RequireAuth from './components/Shared/RequireAuth';
import Dashboard from './components/Pages/Dashboard/Dashboard';
import MyOrders from './components/Pages/Dashboard/MyOrders';
import AddReview from './components/Pages/Dashboard/AddReview';
import MyProfile from './components/Pages/MyProfile/MyProfile';
import AllUser from './components/Pages/ManageUsers/AllUser';
import ManageOrders from './components/Pages/ManageOrders/ManageOrders';
import ManageProduct from './components/Pages/ManageProduct/ManageProduct';
import AddProduct from './components/Pages/Dashboard/AddProduct';
import RequireAdmin from './components/Shared/RequireAdmin';
import Payment from './components/Pages/Payment/Payment';
import MyProtfolio from './components/Pages/MyProtfolio/MyProtfolio';
import NotFound from './components/Pages/NotFound.js/NotFound';

const client = new QueryClient();

function App() {
  return (
    <div>
      <Navbar />
      <QueryClientProvider client={client}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/protfolio" element={<MyProtfolio />} />
          <Route
            path="/purchase/:id"
            element={
              <RequireAuth>
                <Purchase />
              </RequireAuth>
            }
          />
          <Route
            path="dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          >
            <Route path="myOrders" element={<MyOrders />} />
            <Route path="addReview" element={<AddReview />} />
            <Route path="myProfile" element={<MyProfile />} />
            <Route path="payment/:id" element={<Payment />} />
            <Route
              path="allUsers"
              element={
                <RequireAdmin>
                  <AllUser />
                </RequireAdmin>
              }
            />
            <Route
              path="manageAllOrders"
              element={
                <RequireAdmin>
                  <ManageOrders />
                </RequireAdmin>
              }
            />
            <Route
              path="addProduct"
              element={
                <RequireAdmin>
                  <AddProduct />
                </RequireAdmin>
              }
            />
            <Route
              path="manageProducts"
              element={
                <RequireAdmin>
                  <ManageProduct />
                </RequireAdmin>
              }
            />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </QueryClientProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
