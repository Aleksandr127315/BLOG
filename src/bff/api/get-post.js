import { transformPost } from '../transformers';

export const getPost = async (postId) =>
	fetch(`http://localhost:3030/posts/${postId}`)
		.then((res) => {
			if (res.ok) {
				return res;
			}

			const error =
				res.status === 404
					? 'Такой страницы не существует'
					: 'Что-то пошло не так. Попробуйте позднее.';

			return Promise.reject(error);
		})
		.then((response) => response.json())
		.then((loadedPost) => loadedPost && transformPost(loadedPost));
