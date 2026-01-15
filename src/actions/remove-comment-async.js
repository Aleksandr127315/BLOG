import { setPost } from '../reducers/post-reducer';

export const removeCommentAsync =
	(requestServer, postId, commentId) => async (dispatch) => {
		try {
			const postData = await requestServer('removePostComment', postId, commentId);
			console.log('removeCommentAsync response:', postData);
			if (!postData?.res) {
				console.error('Сервер не вернул пост полностью');
				return;
			}
			dispatch(setPost(postData.res));
		} catch (err) {
			console.error('Ошибка при удалении комментария', err);
		}
	};
