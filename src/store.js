import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga'

import reducer from './reducers';
import mapPageSaga from './sagas/map.page';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mapPageSaga);

export default store;