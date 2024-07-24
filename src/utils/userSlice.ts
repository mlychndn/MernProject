import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  isLogin: Boolean;
  userMail: string;
}

const initialState: UserState = {
  isLogin: false,
  userMail: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLogin: (state, action: PayloadAction<UserState>) => {
      state.isLogin = action.payload?.isLogin;
      state.userMail = action.payload?.userMail;
    },
  },
});

export const { setLogin } = userSlice.actions;
export default userSlice.reducer;
