import { transformPost } from '../transformers';

export const getPosts = (page, limit) =>
	fetch(`http://localhost:3030/posts?_page=${page}&_limit=${limit}`)
		.then((loadedposts) =>
			Promise.all([loadedposts.json(), loadedposts.headers.get('Link')]),
		)
		.then(([loadedposts, links]) => ({
			posts: loadedposts && loadedposts.map(transformPost),
			links,
		}));
