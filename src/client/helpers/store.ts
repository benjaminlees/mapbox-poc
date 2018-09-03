import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import defaultReducers from '@redux/index';

const middleware: [] = [];

export default function configureStore(initialState: any) {
  const combinedReducer = combineReducers(defaultReducers);
  let finalCreateStore;

  // @ts-ignore
  if (process.browser && window.devToolsExtension) {
    // @ts-ignore
    finalCreateStore = compose(
      applyMiddleware(...middleware),
      // @ts-ignore
      window.devToolsExtension(),
    )(createStore);
  } else {
    finalCreateStore = compose(applyMiddleware(...middleware))(createStore);
  }

  return finalCreateStore(combinedReducer, initialState);
}
