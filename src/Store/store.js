import { createStore, combineReducers, applyMiddleware } from "redux";
import {thunk} from 'redux-thunk';
import { ToDoReducer } from "../Reducer/ToDoReducer";



const reducers = combineReducers({
    todo: ToDoReducer,
});

const initialState = {
    todo: { todos: [] },
};

const middleware = [thunk];

const store = createStore(
    reducers,
    initialState,
applyMiddleware(...middleware)
);

export default store;