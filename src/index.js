import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import rootReducer from './reducers/index'
import  App  from './App'

 const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )

	ReactDOM.render(
	<Provider store={store}>
   		<App />
  	</Provider>,
    document.getElementById('root')
);