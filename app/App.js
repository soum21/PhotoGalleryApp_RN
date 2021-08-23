import React from 'react';
import AppContext from './configs/context';
import HomePage from './screens/main/home';
const App = () => {
  return (
    <AppContext>
      <HomePage />
    </AppContext>
  );
};

export default App;
