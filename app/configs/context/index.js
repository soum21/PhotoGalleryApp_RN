import React, { createContext, useReducer } from 'react';
import { globalReducer, globalStates } from '../redux';
import PropTypes from 'prop-types';

export const Context = createContext(globalStates);

function AppContext({ children }) {
  const [state, dispatch] = useReducer(globalReducer, globalStates);
  return <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>;
}

AppContext.propTypes = {
  children: PropTypes.element.isRequired
};

export default AppContext;
