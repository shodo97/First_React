import React from 'react';
import { render } from 'react-dom'
import SearchParams from './SearchParams';

const App = () => {
//  return React.createElement("div", {}, [
//    React.createElement("h1", {}, "Adopt Me!"),
//    React.createElement(Pet, {
//      name: "Luna",
//      animal: "Dog",
//      breed: "Havanese",
//    }),
//    React.createElement(Pet, {
//      name: "Pepper",
//      animal: "Bird",
//      breed: "Cocketeil",
//    }),
//    React.createElement(Pet, {
//      name: "Doink",
//      animal: "cat",
//      breed: "Mixed",
//    }),
//  ]);

  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

render(<App />, document.getElementById("root"));
