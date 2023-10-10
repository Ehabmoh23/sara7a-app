import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import Notfound from './components/Notfound/Notfound';
import { useContext, useEffect } from 'react';
import { tokenContext } from './Context/tokenContext';
import SendMessage from './components/SendMessage/SendMessage';
import ProtectedRoutes from './components/Protected-routes/Protected-routes';

function App() {
  let {setToken}= useContext(tokenContext);
useEffect(()=>{
  if(localStorage.getItem("userToken")){
    setToken(localStorage.getItem("userToken"))
  }
},[])

const routes = createBrowserRouter([{
  path:"",element:<Layout/>,children:[
    {path:"register", element:<Register/>},
    {path:"login", element:<Login/>},
    {path:"profile", element:<ProtectedRoutes> <Profile/> </ProtectedRoutes>},
    {path:"message/:id", element:<SendMessage/>},
    {path:"*", element:<Notfound/>},
  ]

}])

  return (
   <RouterProvider router={routes}>

   </RouterProvider>
  );
}

export default App;
