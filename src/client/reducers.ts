import { combineReducers, Reducer } from 'redux';
import { routerReducer } from 'react-router-redux';
import client from './apolloClient';
/* GENERATOR-IMPORT-REDUCER */
import sampleAuth from './containers/SampleAuth/reducer';
import blogPostReducer from 'containers/BlogPost/reducer';
import appReducer from 'containers/App/reducer';
import docsReducer from 'containers/Docs/reducer';
import todoAppReducer from 'containers/TodoApp/reducer';

export const rootReducer = combineReducers({
  /* GENERATOR-EXPORT-REDUCER */
  sampleAuth,
  todoApp: todoAppReducer,
  blogPost: blogPostReducer,
  app: appReducer,
  docs: docsReducer,
  routing: routerReducer,
  apollo: client.reducer() as Reducer<undefined>,
});
