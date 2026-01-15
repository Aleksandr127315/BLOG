import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../../../../../reducers/app-reducer';
import { checkAccess } from '../../../../../../utils';
import { ROLE } from '../../../../../../constants';
import { Icon } from '../../../../../../components';
import { selectUserRole } from '../../../../../../selectors';
import styled from 'styled-components';

const SpecialPanelContainer = ({ className, id: postId, publishedAt, editButton }) => {
	const dispatch = useDispatch();
	const userRole = useSelector(selectUserRole);

	const onPostRemove = () => {
		dispatch(
			openModal({
				text: 'Удалить пост?',
				confirmType: 'DELETE_POST',
				payload: { postId },
			}),
		);
	};

	const isAdmin = checkAccess([ROLE.ADMIN], userRole);

	return (
		<div className={className}>
			<div className="published-at">
				{publishedAt && (
					<Icon
						id="fa-calendar-o"
						size="18px"
						margin="0 7px 0 0"
						inactive={true}
					/>
				)}
				{publishedAt}
			</div>
			{isAdmin && (
				<div className="buttons">
					{editButton}
					{publishedAt && (
						<Icon
							id="fa-trash-o"
							size="21px"
							margin="0 0 0 7px"
							onClick={onPostRemove}
						/>
					)}
				</div>
			)}
		</div>
	);
};
export const SpecialPanel = styled(SpecialPanelContainer)`
	display: flex;
	justify-content: space-between;
	margin: ${({ margin }) => margin};

	& .published-at {
		display: flex;
		font-size: 18px;
	}

	& .buttons {
		display: flex;
	}

	& i {
		position: relative;
		top: -1px;
	}
`;
SpecialPanel.propTypes = {
	id: PropTypes.string.isRequired,
	publishedAt: PropTypes.string.isRequired,
	editButton: PropTypes.node.isRequired,
};
