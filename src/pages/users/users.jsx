import { useEffect, useState } from 'react';
import { Content, H2 } from '../../components';
import { UserRow, TableRow } from './components';
import { useServerRequest } from '../../hooks';
import styled from 'styled-components';

const UsersContainer = ({ className }) => {
	const [users, setUsers] = useState([]);
	const [roles, setRoles] = useState([]);
	const [errorMessage, setErrorMassage] = useState(null);
	const requestServer = useServerRequest();

	useEffect(() => {
		Promise.all([requestServer('fetchRoles'), requestServer('fetchUsers')]).then(
			([usersRes, rolesRes]) => {
				if (usersRes.error || rolesRes) {
					setErrorMassage(usersRes.error || rolesRes);
					return;
				}

				setUsers(usersRes);
				setRoles(rolesRes);
			},
		);

		requestServer('fetchRoles').then(({ rolesError, res }) => {
			if (rolesError) {
				return;
			}

			setRoles(res);
		});

		requestServer('fetchUsers');
	}, [requestServer]);

	return (
		<div className={className}>
			<Content error={errorMessage}>
				<H2>Пользователи</H2>
				<div>
					<TableRow>
						<div className="login-column">Логин</div>
						<div className="registered-column">Дата Регистарции</div>
						<div className="role-column">Роль</div>
					</TableRow>
					{users.map(({ id, login, registredAt, roleId }) => (
						<UserRow
							key={id}
							login={login}
							registredAt={registredAt}
							roleId={roleId}
							roles={roles}
						/>
					))}
				</div>
			</Content>
		</div>
	);
};

export const Users = styled(UsersContainer)`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 auto;
	width: 570px;
`;
