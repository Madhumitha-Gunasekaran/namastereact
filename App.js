import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './src/components/Header';
import Body from './src/components/Body';
import { createBrowserRouter, RouterProvider,Outlet } from 'react-router-dom';
import About from './src/components/About';
import Contact from './src/components/Contact';
import Error from './src/components/Error';

const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
            <Outlet />
        </div>
    )
};
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path:"/",
                element:<Body/>
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
        ],
        errorElement: <Error />
    },


])

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<AppLayout/>)
// to provide routes we have to modify the above line
root.render(<RouterProvider router={appRouter} />)


















// const heading = React.createElement(
//     "h1",
//     {id:"heading"}, //attributes , it can be class or id
//     "Hello world from React!");
//     console.log(heading)// this will give an object
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading)
/**
 * <div id ="parent">
 * <div id = "child">
 * <h1></h1>
 * <h1></h1>
 * </div>
 * </div>
 * try creating this
 */