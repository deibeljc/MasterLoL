import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  base: (state = [], action) => {
    switch (action.type) {
      default:
        return state;
    }
  }
});

export default rootReducer;
