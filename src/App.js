import React from 'react'
import ReactDOM from 'react-dom/client'
import Body from './components/Body'
import Header from './components/Header'
import About from "./components/About"
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import ContactUs from './components/ContactUs'
import Error from './components/Error'

// ------------------------****************************************---------------------------

// Some React basic concepts  -->

// const header = React.createElement(
//   'h1',
//   { id: 'heading' },
//   'Hello world from the react!!'
// )

// console.log(header) // prints react element (javascript object)

// /*
//     If we want to create a nested html structure like this

//     <div id = "parent">
//         <div id= "child">
//             <h1>I'm a H1 tag</h1>
//             <h2>I'm a H2 tag</h2>
//         </div>
//     </div>
// */

// const parent = React.createElement(
//   'div',
//   { id: 'parent' },
//   React.createElement('div', { id: 'child' }, [
//     React.createElement('h1', {key:"unique1"}, "I'm a H1 tag"),
//     React.createElement('h2', {key:"unique2"}, "I'm a H2 tag")
//   ])
// )

// /*
//   But building websites using like this is going to be almost impossible.
//   In that case JSX comes into picture which allows us to write both markup and business logic togther.
// */

// console.log(parent)

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(parent)

// -----------------------***********************************---------------------------------

// /*
//   Here we are creating a react element directly using the react library, this is hard to maintain.
// */
// const heading = React.createElement("h1", {id:'heading'}, "Namaste React");

// /*
//   This is JSX, not pure JS. We get error if we write it in a plain javascript file.
//   But here PARCEL is transpiling the code before giving it to javascript engine (browser).
//   How Parcel is doing this? using Babel
//   Babel internally calls React.createElement to create react element.
// */
// const headingUsingJSX = <h1 className='head'> Namaste React using JSX </h1>;

// // multiline JSX must be written enclosed in the round bracket
// const multiLineJsx = (<h2>
//   Second heading
// </h2>)

// // This is also react object not HTML object. JSX provides HTML like syntax to create react elements.
// console.log(headingUsingJSX);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);

// -----------------------***********************************---------------------------------

// /*
//   Components in react
// */

// /*
//   React Element
// */

// const element = <span>some spanned text</span>
// const header = (
//     <h1 id="heading">
//       Namaste React
//       {element}
//     </h1>

//   );

// /*
//   React Component
//   There are 2 types : 1. Class Components and 2. Functional Components
// */

// /*
//   Functional Component is a javascript function that return a JSX element (React Element)
// */

// const Title = () => {
//   return <h1>Title component</h1>
// }

/*
  Component composition - component used inside another one.
*/
// const HeadingComponent = () => {
//   return (
//     <div id="container">
//       <Title/>
//       <Title></Title>
//       {Title()}
//       {header}
//       <h1 id="heading">Namaste React Functional Component</h1>
//     </div>
//   );
// }

// // this is not React element or Object, instead this is a javascript function.
// console.log(HeadingComponent);
// // Again prints a React element (Object)
// console.log(<HeadingComponent/>)

// const root = ReactDOM.createRoot(document.getElementById("root"));
// // root.render(header);
// root.render(<HeadingComponent/>);

// -----------------------***********************************---------------------------------

/**
 * Delivery app.
 *
 * Header
 *  - Logo
 *  - Nav Items
 *
 * Body
 *  - Search
 *  - Restaurant Container
 *    - Restaurant Card
 *
 * Footer
 *  - Address
 *  - Links
 *  - Copyrights
 *  - Contacts
 *
 */
const AppLayout = () => {
  return (
    <div className='app'>
      <Header />
      <Outlet />
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body/>
      }, 
      {
        path:"/about",
        element: <About/>
      },
      {
        path: "/contact",
        element: <ContactUs/>
      }
    ],
    errorElement: <Error />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter} />)
