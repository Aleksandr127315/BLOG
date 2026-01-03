import { Button } from '../button/button';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import {
	selectModelIsOpen,
	selectModelOnCancel,
	selectModelOnConfirm,
	selectModelText,
} from '../../selectors';

const ModelContainer = ({ className }) => {
	const text = useSelector(selectModelText);
	const onConfirm = useSelector(selectModelOnConfirm);
	const onCancel = useSelector(selectModelOnCancel);
	const isOpen = useSelector(selectModelIsOpen);

	// if (!isOpen) {
	// 	return null;
	// }

	return (
		<div className={className}>
			<div className="overlay"></div>
			<div className="box">
				<h3>Удалить комментарий?{text}</h3>
				<div className="buttons">
					<Button width="120px" onClick={onConfirm}>
						Да
					</Button>
					<Button width="120px" onClick={onCancel}>
						Отмена
					</Button>
				</div>
			</div>
		</div>
	);
};

export const Model = styled(ModelContainer)`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 20;

	& .overlay {
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.7);
	}

	& .box {
		position: relative;
		top: 50%;
		transform: translate(0, -50%);
		width: 400px;
		margin: 0 auto;
		padding: 0 20px 20px;
		text-align: center;
		background-color: #fff;
		border: 3px solid #000;
		z-index: 30px;
	}

	& .buttons {
		display: flex;
		justify-content: center;
	}

	& .buttons button {
		margin: 0 5px;
	}
`;
