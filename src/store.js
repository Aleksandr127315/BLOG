import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/user-reducer';
import postReducer from './reducers/post-reducer';
import appReducer from './reducers/app-reducer';

export const store = configureStore({
	reducer: {
		app: appReducer,
		user: userReducer,
		post: postReducer,
	},
});
