import { setPost } from '../reducers/post-reducer';

export const savePostAsync = (requestServer, postData) => async (dispatch) => {
	const result = await requestServer('savePost', postData);

	dispatch(setPost(result.res));

	return result.res;
};
