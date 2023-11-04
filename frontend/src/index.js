import React from 'react';
import ReactDOM from 'react-dom/client';
//import  'bootstrap/dist/css/bootstrap.min.css';
import './styles/bootstrap.custom.css';
import './styles/index.css';
//import './index.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import Shipping from "./pages/Shipping";
import PrivateRoute from './components/PrivateRoute';
import Payment from './pages/Payment';
import PlaceOrder from './pages/PlaceOrder';
import {Provider} from 'react-redux';
import store from './store';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<Home />}/>
      <Route path='/product/:id' element={<Detail />}/>
      <Route path='/cart' element={<Cart />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register />}/>

      <Route path='' element={<PrivateRoute />}>
        <Route path='/shipping' element={<Shipping />}/>
        <Route path='/payment' element={<Payment />}/>
        <Route path='/placeorder' element={<PlaceOrder />}/>
      </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
