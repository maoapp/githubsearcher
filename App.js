import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import AppNavigator from './app/AppNavigator';

import AppReducer from './app/reducers';

const store = createStore(AppReducer, applyMiddleware(thunk));

const App = () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>  
)

export default App;
