import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UIState {
  scrollToTopVisible: boolean;
  isMenuOpen: boolean;
  activeSection: string | null;
}

const initialState: UIState = {
  scrollToTopVisible: false,
  isMenuOpen: false,
  activeSection: null,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setScrollToTopVisible: (state, action: PayloadAction<boolean>) => {
      state.scrollToTopVisible = action.payload;
    },
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    setMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.isMenuOpen = action.payload;
    },
    setActiveSection: (state, action: PayloadAction<string | null>) => {
      state.activeSection = action.payload;
    },
  },
});

export const { 
  setScrollToTopVisible, 
  toggleMenu, 
  setMenuOpen, 
  setActiveSection 
} = uiSlice.actions;

export default uiSlice.reducer; 