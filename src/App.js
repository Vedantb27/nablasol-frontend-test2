import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ProjectProvider } from './context/ProjectContext';
import CreateAccount from "./Components/CreateAccount";
import BusinessInformation from './Components/BusinessInformation';
import { GlobalProvider } from './GlobalContext';


function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <BusinessInformation/>
      </div>
    </GlobalProvider>
  );
}

export default App;
