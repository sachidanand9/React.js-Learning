// import Navbar from './components/Navbar'
import {  createBrowserRouter } from 'react-router-dom'
import Home from './Home'
import Careers from './Careers'
import Register from './Register'
import Login from './Login'
import About from './About'
import Layout from './Layout'
import Profile from './Profile'

 
  /*let router = createBrowserRouter([
    {
      path:"/",
      element: <Home/>
    },
    {
      path:"/register",
      element:<Register/>

    },
    {
      path:"/about",
      element:<About/>

    },
    {
      path:"/careers",
      element:<Careers/>

    },
    {
      path:"/login",
      element:<Login/>

    }
  ])*/

 export let router = createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
    
    {
      // path:"/",
      index:true, // it will accept the path of layout component (deafult render,)
      element: <Home/>
    },
    {
      path:"/register",
      element:<Register/>,

    },
    {
      path:"/about",
      element:<About/>,

    },
    {
      path:"/careers",
      element:<Careers/>,

    },
    {
      path:"/login",
      element:<Login/>,

    },
    {
      path:"/profile",
      element:<Profile/>
    }
  ],
},
  ]);
  // return(
  //   <div>
  //     <Navbar/>
  //     <RouterProvider router={router}/> 
  //   </div>
  // )
