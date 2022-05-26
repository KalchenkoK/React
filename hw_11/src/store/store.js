import { applyMiddleware, compose, createStore } from "redux";
import reducer from "./reducers/todosReducer";
import reduxThunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducer,
  composeEnhancers(applyMiddleware(reduxThunk))
);
