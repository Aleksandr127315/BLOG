import { resetPostData } from '../reducers/post-reducer';

export const removePostAsync = (requestServer, postId) => async (dispatch) => {
	try {
		const result = await requestServer('removePost', postId);

		if (result?.error) {
			console.error('Ошибка при удалении поста:', result.error);
			return false;
		}

		dispatch(resetPostData());
		return true;
	} catch (err) {
		console.error('Ошибка при удалении поста:', err);
		return false;
	}
};
