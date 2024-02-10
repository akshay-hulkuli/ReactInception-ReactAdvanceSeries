import React, { lazy, Suspense, useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import Body from './components/Body'
import Header from './components/Header'
// import About from './components/About'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import ContactUs from './components/ContactUs'
import Error from './components/Error'
import RestaurantMenu from './components/RestuarantMenu'
import UserContext from './utils/UserContext'
// import Grocery from './components/Grocery'

const Grocery = lazy(() => import('./components/Grocery'))
const About = lazy(() => import('./components/About'))

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

/*
  Chunking or Code splitting or Dynamic Bundling or lazy loading
    * Usually the bundlers create only one bundle for the given application.
    * As the application size increases the size of the bundle js file also increases a lot.
    * This will cause slowness in loading the UI.
    * Inorder to avoid this we can use of chunking.
*/

/*
  Tailwind css adds only css classes that are needed. Example if I add p-4 in 10 files then at the end tailwind css adds only one p-4 css class.
  Makes css of the application very lightweight
*/
const AppLayout = () => {
  const [userName, setUserName] = useState()

  useEffect(() => {
    const data = {
      name: 'Akshay'
    }
    setUserName(data.name)
  }, [])
  return (
    <div className='bg-neutral-200 min-h-lvh'>
      <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
        <UserContext.Provider value={{loggedInUser: "changed Name"}}>
          <Header />
        </UserContext.Provider>
        <Outlet />
      </UserContext.Provider>
    </div>
  )
}

/*
  Some knowleadge on routing.
  There can be 2 types routing 1. Server side routing and 2. Client side routing.

  1. Server side routing ->
    It is the traditional method for handling routes in the web applications.
    When a user clicks on a link, server detects the new URL (Ex: anchor tag).
    And fetchs data from that URL by making a Http call.

  2. Client side rendering ->
    This is the new way of outing made possible by single page applications.
    Here user navigates between components, without full rerendering of the page.
    This is done by manipulating the DOM.
*/

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/about',
        element: (
          <Suspense fallback={<h2>Loading</h2>}>
            <About />
          </Suspense>
        )
      },
      {
        path: '/contact',
        element: <ContactUs />
      },
      {
        path: '/grocery',
        element: (
          <Suspense fallback={<h2>Grocery is being loaded</h2>}>
            <Grocery />
          </Suspense>
        )
      },
      {
        path: '/restaurant/:resId',
        element: <RestaurantMenu />
      }
    ],
    errorElement: <Error />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter} />)
