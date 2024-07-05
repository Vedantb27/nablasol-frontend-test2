import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CreateAccount from "./Components/CreateAccount";
import BusinessInformation from './Components/BusinessInformation';
import { GlobalProvider } from './GlobalContext';


function App() {
  const router = createBrowserRouter([
    { path: "/", element: <CreateAccount/> },
    { path: "/BusinessInformation", element: <BusinessInformation /> },
    
  ]);
  return (
    <GlobalProvider>
      <div className="App">
      <RouterProvider router={router} />
      </div>
    </GlobalProvider>
  );
}

export default App;
