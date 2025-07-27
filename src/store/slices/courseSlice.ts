import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { fetchIELTSCourseData } from '@/utils/api';
import { Data, Language } from '@/types/api';

// Async thunk for fetching course data
export const fetchCourseData = createAsyncThunk(
  'course/fetchCourseData',
  async (language: Language, { rejectWithValue }) => {
    try {
      const response = await fetchIELTSCourseData(language);
      return response.data;
    } catch {
      return rejectWithValue('Failed to load course information. Please try again later.');
    }
  }
);

interface CourseState {
  data: Data | null;
  language: Language;
  loading: boolean;
  error: string | null;
}

const initialState: CourseState = {
  data: null,
  language: 'en',
  loading: false,
  error: null,
};

const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<Language>) => {
      state.language = action.payload;
      state.error = null; // Clear any previous errors when language changes
    },
    clearError: (state) => {
      state.error = null;
    },
    clearData: (state) => {
      state.data = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourseData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCourseData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchCourseData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string || 'An error occurred while fetching data';
      });
  },
});

export const { setLanguage, clearError, clearData } = courseSlice.actions;
export default courseSlice.reducer; 