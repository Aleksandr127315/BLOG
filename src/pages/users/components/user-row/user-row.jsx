import { useDispatch } from 'react-redux';
import { Icon } from '../../../../components';
import { TableRow } from '../table-row/table-row';
import { ROLE } from '../../../../constants';
import styled from 'styled-components';

const UserRowContainer = ({ className, login, registredAt, roleId: userRoleID }) => {
	const roles = [];

	const dispatch = useDispatch();

	const onRoleChange = () => {};

	return (
		<div className={className}>
			<TableRow>
				<div className="login-column">{login}</div>
				<div className="registered-column">{registredAt}</div>
				<div className="role-column">
					<select value={userRoleID} onChange={onRoleChange}>
						{roles.map(({ id: roleId, name: roleName }) => (
							<option value={roleId}>{roleName}</option>
						))}
					</select>
					<Icon
						id="fa-floppy-o"
						margin="0 0 0 10px"
						onClick={() => dispatch(/* TODO*/)}
					/>
				</div>
			</TableRow>
			<Icon
				id="fa-trash-o"
				margin="0 0 0 10px"
				onClick={() => dispatch(/* TODO*/)}
			/>
		</div>
	);
};

export const UserRow = styled(UserRowContainer)``;
