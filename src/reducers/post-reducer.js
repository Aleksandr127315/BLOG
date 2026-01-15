import { createSlice } from '@reduxjs/toolkit';

const initialPostState = {
	id: null,
	title: null,
	imageUrl: null,
	content: null,
	publishedAt: null,
	comments: [],
};

const postSlice = createSlice({
	name: 'post',
	initialState: initialPostState,
	reducers: {
		setPost(state, action) {
			return {
				...state,
				...action.payload,
				comments: action.payload.comments ?? state.comments ?? [],
			};
		},
		resetPostData() {
			return initialPostState;
		},
	},
});
export const { setPost, resetPostData } = postSlice.actions;
export default postSlice.reducer;
