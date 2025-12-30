import { transformPost } from '../transformers';

export const getPost = async (postId) =>
	fetch(`http://localhost:3030/posts/${postId}`)
		.then((response) => response.json())
		.then((loadedPost) => loadedPost && transformPost(loadedPost));
