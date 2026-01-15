import { setPost } from '../reducers/post-reducer';
export const loadPostAsync = (requestServer, postId) => (dispatch) =>
	requestServer('fetchPost', postId).then((postData) => {
		if (postData.res) {
			dispatch(setPost(postData.res));
		}
		return postData;
	});
