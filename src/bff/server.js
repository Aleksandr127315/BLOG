import { authorize, fetchUsers, fetchRoles, logout, register } from './opirations';

export const server = {
	authorize,
	logout,
	register,
	fetchUsers,
	fetchRoles,
};
