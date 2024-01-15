import React from 'react';
import ReactDOM from 'react-dom/client';

const header = React.createElement(
  'h1',
  { id: 'heading' },
  'Hello world from the react!!'
)

console.log(header) // prints react element (javascript object)

/*
    If we want to create a nested html structure like this 

    <div id = "parent">
        <div id= "child">
            <h1>I'm a H1 tag</h1>
            <h2>I'm a H2 tag</h2>
        </div>
    </div>
*/

const parent = React.createElement(
  'div',
  { id: 'parent' },
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', {key:"unique1"}, "I'm a H1 tag"),
    React.createElement('h2', {key:"unique2"}, "I'm a H2 tag")
  ])
)

/*
  But building websites using like this is going to be almost impossible.
  In that case JSX comes into picture which allows us to write both markup and business logic togther.
*/

console.log(parent)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent)
