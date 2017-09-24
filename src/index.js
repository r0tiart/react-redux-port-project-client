import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import rootReducer from './reducers/index'
import  WrapperApp  from './App'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'

 const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )

	ReactDOM.render(
	<Provider store={store}>
   		<WrapperApp />
  	</Provider>,
    document.getElementById('root')
);