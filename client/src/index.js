// ServiceWorker
// Ref: https://stackoverflow.com/questions/49314386/what-is-service-worker-in-react-js
// You may not need a service worker for your application. 
// If you are creating a project with create-react-app it is invoked by default
// Service workers are well explained in this article. To Summarise from it
// A service worker is a script that your browser runs in the background, separate from a web page, 
// opening the door to features that don't need a web page or user interaction. 
// Today, they already include features like push notifications and background sync 
// and have  ability to intercept and handle network requests, 
// including  programmatically managing a cache of responses.
// In the future, service workers might support other things like  periodic sync or geofencing.


import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
