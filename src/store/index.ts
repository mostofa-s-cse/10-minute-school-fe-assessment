import { configureStore } from '@reduxjs/toolkit';
import courseReducer from './slices/courseSlice';
import uiReducer from './slices/uiSlice';

export const store = configureStore({
  reducer: {
    course: courseReducer,
    ui: uiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['course/fetchCourseData/fulfilled'],
        // Ignore these field paths in all actions
        ignoredActionPaths: ['payload.timestamp'],
        // Ignore these paths in the state
        ignoredPaths: ['course.data'],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 