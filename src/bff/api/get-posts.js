import { transformPost } from '../transformers';

export const getPosts = (searchPhrase, page, limit) =>
	fetch(
		`http://localhost:3030/posts?title_like=${searchPhrase}&_page=${page}&_limit=${limit}`,
	)
		.then((loadedposts) =>
			Promise.all([loadedposts.json(), loadedposts.headers.get('Link')]),
		)
		.then(([loadedposts, links]) => ({
			posts: loadedposts.map(transformPost),
			links,
		}));
