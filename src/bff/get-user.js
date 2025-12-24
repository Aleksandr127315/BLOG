import { getUsers } from '../bff/index';

export const getUser = async (loginToFind) => {
	const users = await getUsers();

	return users.find(({ login }) => login === loginToFind);
};
