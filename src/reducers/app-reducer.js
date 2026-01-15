import { createSlice } from '@reduxjs/toolkit';
import { removePostAsync, removeCommentAsync } from '../actions';

const initialState = {
	wasLogout: false,
	modal: {
		isOpen: false,
		text: '',
		confirmType: null,
		payload: null,
	},
};

const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		logoutOccurred(state) {
			state.wasLogout = !state.wasLogout;
		},
		openModal(state, action) {
			state.modal.isOpen = true;
			state.modal.text = action.payload.text;
			state.modal.confirmType = action.payload.confirmType;
			state.modal.payload = action.payload.payload || null;
		},
		closeModal(state) {
			state.modal = initialState.modal;
		},
	},
});

export const confirmModal = (requestServer) => async (dispatch, getState) => {
	const { confirmType, payload } = getState().app.modal;

	if (!confirmType) {
		dispatch(closeModal());
		return;
	}

	try {
		switch (confirmType) {
			case 'DELETE_POST': {
				const { postId } = payload;
				await dispatch(removePostAsync(requestServer, postId));
				break;
			}
			case 'DELETE_COMMENT': {
				const { postId, commentId } = payload;

				await dispatch(removeCommentAsync(requestServer, postId, commentId));
				break;
			}
			default:
				break;
		}
	} catch (err) {
		console.error('Ошибка confirmModal:', err);
	} finally {
		dispatch(closeModal());
	}
};

export const { logoutOccurred, openModal, closeModal } = appSlice.actions;
export default appSlice.reducer;
