import { configureStore } from '@reduxjs/toolkit';
import themeSlice from './theme.slice';
import userSlice from './user.slice';


export const store = configureStore({
  reducer: {
    themeSlice,
    userSlice,
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
