import React, {createContext, useReducer} from 'react';
import {globalReducer, globalStates} from '../redux';

export const Context = createContext(globalStates);

function AppContext({children}) {
  const [state, dispatch] = useReducer(globalReducer, globalStates);
  return <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>;
}

export default AppContext;
