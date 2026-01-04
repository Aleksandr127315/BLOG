export const deletePost = async (postId) =>
	fetch(`http://localhost:3030/posts/${postId}`, {
		method: 'DELETE',
	});
