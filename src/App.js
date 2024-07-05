import React from 'react';
import CreateAccount from "./Components/CreateAccount";
import { GlobalProvider } from './GlobalContext';

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <CreateAccount/>
      </div>
    </GlobalProvider>
  );
}

export default App;
