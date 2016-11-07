import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createLogger from 'redux-logger'
import { composeWithDevTools } from 'remote-redux-devtools';
import reducers from './reducers';
import sagas from './sagas';

const logger = createLogger();
const sagasMiddleware = createSagaMiddleware();

export default function configureStore(initialState = fromJS({})) {
  const middlewares = [logger, sagasMiddleware];
  const enhancers = [applyMiddleware(...middlewares)];
  const store = createStore(reducers, initialState, composeWithDevTools(compose(...enhancers)));
  sagasMiddleware.run(sagas);
  return store;
}
