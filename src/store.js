import { createStore } from 'redux'
import thunk from "redux-thunk";

import reducer from './reducers';

const store = createStore(reducer);

export default store;
