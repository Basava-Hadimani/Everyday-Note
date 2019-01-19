import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import combineReducers from './reducers/index';
import axios from 'axios';
import { BrowserRouter , Route, Switch} from "react-router-dom";



window.axios = axios;
const store = createStore(combineReducers, [], applyMiddleware(reduxThunk));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


