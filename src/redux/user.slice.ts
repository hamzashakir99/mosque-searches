import { createSlice } from '@reduxjs/toolkit';



export const userSlice = createSlice({
  name: 'user-slice',
  initialState: {

  },
  reducers: {
    updateUser: (state, action) => {
      return {
        ...state,
        ...action.payload
      };
    },
  }
});

// Action creators are generated for each case reducer function
export const { updateUser } = userSlice.actions;

export default userSlice.reducer;
