import { configureStore } from '@reduxjs/toolkit';

import {
	usersReducer,
	postsReducer,
	userReducer,
	postReducer,
	appReducer,
} from './reducers';

export const store = configureStore({
	reducer: {
		app: appReducer,
		user: userReducer,
		users: usersReducer,
		post: postReducer,
		posts: postsReducer,
	},
});
