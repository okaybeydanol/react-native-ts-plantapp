import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState: {login: boolean} = {
  login: false,
};

export const LoginSlice = createSlice({
  name: 'Login',
  initialState,
  reducers: {
    setLogin: (
      state: {login: boolean},
      action: PayloadAction<{login: boolean}>,
    ) => {
      state.login = action.payload.login;
    },
  },
});

export const {setLogin} = LoginSlice.actions;
export default LoginSlice.reducer;
