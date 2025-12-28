import {
	authorize,
	fetchUsers,
	fetchRoles,
	logout,
	register,
	updateUserRole,
	removeUser,
} from './opirations';

export const server = {
	authorize,
	logout,
	register,
	fetchUsers,
	fetchRoles,
	updateUserRole,
	removeUser,
};
