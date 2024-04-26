import React from "react";
import ReactDOM from "react-dom"; 
//library that allows us to render React components to the DOM
import "./index.css";
import App from "./App";
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>, 
    document.getElementById("root")
);   
// render the App Component to the root element in the DOM
// (the root element is in the public/index.html file)
// the App component is the parent component of the entire
// application.

// the App component is imported from the App.js file.
// the App component is a functional component that returns
// JSX.

// the App component is wrapped in a <React.StrictMode> tag.
// the <React.StrictMode> tag is a tool for highlighting
// potential problems in an application.
// the <React.StrictMode> tag only affects development mode.
// the <React.StrictMode> tag does not render any visible UI.
// the <React.StrictMode> tag activates additional checks and
// warnings for its descendants.
// the <React.StrictMode> tag wraps the App component.
