export const deleteComment = async (commentId) =>
	fetch(`http://localhost:3030/comments/${commentId}`, {
		method: 'DELETE',
	});
