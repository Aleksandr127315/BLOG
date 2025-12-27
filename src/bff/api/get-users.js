export const getUsers = () =>
	fetch('http://localhost:3030/users').then((loadedUsers) => loadedUsers.json());
