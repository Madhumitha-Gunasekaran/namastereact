import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './src/components/Header';
import Body from './src/components/Body';
/**
 * -Header
 *   -Logo
 *   -NavItems
 * -Body
 *      -Search
 *      -RestaurantContainer
 *          -Restaurant Card
 *                 -img
 *                 -Name of Res,star rating,cuisine, delvery time
 * -Footer
 *      -copyright
 *      -links
 *      -Address
 *      -contact
 */



const AppLayout=()=>{
    return(
        <div className='app'>
<Header/>
<Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>)

  

















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