const heading = React.createElement(
    "h1", 
    {id:"heading"}, //attributes
    "Hello world from React!");
    console.log(heading)// this will give an object
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading)
/**
 * <div id ="parent">
 * <div id = "child">
 * <h1></h1>
 * <h1></h1>
 * </div>
 * </div>
 * try creating this
 */