import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

//import root reducer
import rootReducer from './reducers/index';
//data
import comments from './data/comments';
import posts from './data/posts';

//create an object for the default data
const defaultState = {
    posts,
    comments,
};

const store = createStore(rootReducer, defaultState);
//tracks where you are when you are navigating between pages
export const history = syncHistoryWithStore(browserHistory);

export default store;