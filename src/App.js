import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import Header from './Pages/Shared/Header';
import Purchase from './Pages/Home/Purchase';
import RequireAuth from './Pages/Login/RequireAuth';
import Blogs from './Pages/Blogs/Blogs';
import Portfolio from './Pages/Portfolio/Portfolio';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import AddReview from './Pages/Dashboard/AddReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import AddProduct from './Pages/Dashboard/AddProduct';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import ManageOrders from './Pages/Dashboard/ManageOrders';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import RequireAdmin from './Pages/Dashboard/RequireAdmin';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
        <Route path='/purchase/:id' element={
          <RequireAuth><Purchase></Purchase></RequireAuth>
        }></Route>
        <Route path='/dashboard' element={
          <RequireAuth><Dashboard></Dashboard></RequireAuth>
        }>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='order' element={<MyOrders></MyOrders>}></Route>
          <Route path='review' element={<AddReview></AddReview>}></Route>
          <Route path='addProduct' element={
            <RequireAdmin><AddProduct></AddProduct></RequireAdmin>
          }></Route>
          <Route path='manageProduct' element={
            <RequireAdmin><ManageProducts></ManageProducts></RequireAdmin>
          }></Route>
          <Route path='manageOrder' element={
            <RequireAdmin><ManageOrders></ManageOrders></RequireAdmin>
          }></Route>
          <Route path='makeAdmin' element={
            <RequireAdmin><MakeAdmin></MakeAdmin></RequireAdmin>
          }></Route>
        </Route>

      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
