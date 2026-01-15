import { createSlice } from '@reduxjs/toolkit';
import { ROLE } from '../constants';

const initialState = {
	id: null,
	login: null,
	roleId: ROLE.GUEST,
	session: null,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser(state, action) {
			state.id = action.payload.id;
			state.login = action.payload.login;
			state.roleId = action.payload.roleId;
			state.session = action.payload.session;
		},
		logout() {
			return initialState;
		},
	},
});
export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
