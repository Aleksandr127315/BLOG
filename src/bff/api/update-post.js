export const updatePost = ({ id, title, imageUrl, content }) =>
	fetch(`http://localhost:3030/posts/${id}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			imageUrl,
			title,
			content,
		}),
	}).then((loadedPost) => loadedPost.json());
