import { Icon } from '../../../../components';
import styled from 'styled-components';

const RightAligned = styled.div`
	display: flex;
	justify-content: flex-end;
`;

const Button = styled.button`
	font-size: 18px;
	width: 100px;
	hieght: 32px;
`;

const ControlPanelContainer = ({ className }) => {
	return (
		<div className={className}>
			<RightAligned>
				<Button>войти</Button>
			</RightAligned>
			<RightAligned>
				<Icon id="fa-backward" size="24px" margin="10px 0 0 0" />
				<Icon id="fa-file-text-o" size="24px" margin="10px 0 0 16px" />
				<Icon id="fa-users" size="24px" margin="10px 0 0 16px" />
			</RightAligned>
		</div>
	);
};

export const ControlPanel = styled(ControlPanelContainer)``;
