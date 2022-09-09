// import logo from './logo.svg';
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom';
import { Toaster } from "react-hot-toast";
import './App.css';
import Header from './components/Header';
import Home  from './components/Home';
import Login  from './components/Login';
import  NotFound from './components/NotFound'
import  Eventhandling from './components/Eventhandling'
import  Todo from './components/Todo'
import Register from './components/Register';
import Product from './components/Product';
import UserManager from './components/UserManager'
import ProductManager from './components/ProductManager';



function App() {
  return (
    <div >
      {/* <Home/> */}
      <Toaster position='top-right'/>
     
      <BrowserRouter>
      <Header/>
      {/* <Link to="/login"> login </Link> */}

      <Routes> 
        <Route element={<Home/>}  path="/"/>
        <Route element={<Home/>}  path="Home"/>
        <Route element={<Login/>}  path="Login"/>
        <Route element={<Eventhandling/>}  path="Eventhandling"/>
        <Route element={<Todo/>}  path="Todo"/>
        <Route element={<Register/>}  path="Register"/>
        <Route element={<Product/>}  path="product"/>
        <Route element={<UserManager/>}  path="UserManager"/>
        <Route element={<ProductManager/>}  path="ProductManager"/>
        <Route element={<NotFound/>}  path="*"/>
        </Routes>
     </BrowserRouter>
    
    </div>
  );
}

export default App;
