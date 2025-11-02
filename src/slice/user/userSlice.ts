import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { User } from '../../types/types';

interface UserState {
  userdata: User | null;
  isAuthenticated: boolean;
}

const initialState: UserState = {
  userdata: null,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      console.log('setUser payload: ', action.payload);
      state.userdata = action.payload;
    },
    setIsAuthenticated: (state, action: PayloadAction<boolean>) => {
      console.info('setIsAuthenticated payload: ', action.payload);
      state.isAuthenticated = action.payload;
    },
    setLoggedInUser: (state, action: PayloadAction<User>) => {
      console.log('setLoggedInUser payload: ', action.payload);
      state.userdata = action.payload;
      state.isAuthenticated = true;
    },
    setLoggedOutUser: (state) => {
      state.userdata = null;
      state.isAuthenticated = false;
    },
  },
});

export const selectUser = (state: RootState) => state.user.userdata;
export const {
  setUser,
  setIsAuthenticated,
  setLoggedInUser,
  setLoggedOutUser,
} = userSlice.actions;
export default userSlice.reducer;
