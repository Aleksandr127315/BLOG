import { setPost } from '../reducers/post-reducer';

export const addCommentAsync = (requestServer, postId, userId, content) => (dispatch) => {
	requestServer('addPostComment', postId, userId, content).then((postData) => {
		dispatch(setPost(postData.res));
	});
};
