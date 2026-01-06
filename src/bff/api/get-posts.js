import { transformPost } from '../transformers';

export const getPosts = () =>
	fetch('http://localhost:3030/posts')
		.then((loadedposts) => loadedposts.json())
		.then((loadedposts) => loadedposts && loadedposts.map(transformPost));
