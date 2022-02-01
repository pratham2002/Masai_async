// // comment
// // import add from "./funcs"
// //   console.log(add(1, 2));
import "./index.css"
//   var h1 = document.createElement("h1")
//   h1.innerHTML="Hello WebPack"
//   h1.classList.add("colorForH1")
//   document.getElementById("root").append(h1)

import React from "react";
import ReactDOM from "react-dom";

const i = React.createElement("i",{className:"italicText"},"Italic Text")
const h1 = React.createElement("h1", { id: "ABC", className:"colorForH1" }, ["Hello WebPack from react ",i]);

ReactDOM.render(
  h1,
  document.getElementById("root")s
)
