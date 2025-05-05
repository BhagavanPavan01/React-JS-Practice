// import React from "react";
// import ReactDOM from "react-dom/client";

// const root = ReactDOM.createRoot(document.getElementById("root"));

// const element = (
//   <div>
//     <h1 className="greeting">Hello, world!</h1>
//     <h2 className="greeting">Welcome to React!</h2>
//   </div>
// );

// root.render(element);



// const root = ReactDOM.createRoot(document.getElementById("root"));
// const Welcome = (props) => {
//   const { name, greeting, age } = props;
//   return (<h1 className="greeting">
//     {greeting}, {name},{age}!
//   </h1>)
// };
// root.render(
//   <div>
//     <Welcome name="Pavan" greeting="Hello" age="21" />
//     <Welcome name="Pavan" greeting="Hello" age="21" />
//   </div>,
//   document.getElementById("root")
// );


// const Greeting = () => (
//   <div>
//     <Welcome name="Pavan" greeting="Hello" age="21" />
//     <Welcome name="Pavan" greeting="Hello" age="21" />
//   </div>
// )
// ReactDOM.render(<Greeting />,document.getElementById("root"));



import React from "react";
import ReactDOM from "react-dom/client";

const Heading = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Heading 1"
);

const Heading2 = React.createElement(
  "h2", 
  {
    id: "subtitle", // avoid duplicate ID
  },
  "Heading 2"
);

// 👇 This was missing
const container = React.createElement("div", null, Heading, Heading2);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
