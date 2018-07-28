import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Save a reference to the root element for reuse
const rootNode = document.getElementById('root');

// Create a reusable render method that we can call more than once
let render = () => {
  // Dynamically import our main App component, and render it
  const App = require('./components/App').default;

  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    rootNode
  );
};

if (module.hot) {
  // Support hot reloading of components
  // and display an overlay for runtime errors
  const renderApp = render;

  const renderError = (error) => {
    console.error(error);
  };

  // In development, we wrap the rendering function to catch errors,
  // and if something breaks, log the error and render it to the screen
  render = () => {
    try {
      renderApp();
    }
    catch (error) {
      renderError(error);
    }
  };

  // Whenever the App component file or one of its dependencies
  // is changed, re-import the updated component and re-render it
  module.hot.accept('./components/App', () => {
    render();
  });
}

render();
