import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { 
  setScrollToTopVisible, 
  toggleMenu, 
  setMenuOpen, 
  setActiveSection 
} from '@/store/slices/uiSlice';

export const useUI = () => {
  const dispatch = useAppDispatch();
  const { scrollToTopVisible, isMenuOpen, activeSection } = useAppSelector((state) => state.ui);

  const updateScrollVisibility = (visible: boolean) => {
    dispatch(setScrollToTopVisible(visible));
  };

  const toggleMenuState = () => {
    dispatch(toggleMenu());
  };

  const setMenuState = (open: boolean) => {
    dispatch(setMenuOpen(open));
  };

  const updateActiveSection = (section: string | null) => {
    dispatch(setActiveSection(section));
  };

  return {
    scrollToTopVisible,
    isMenuOpen,
    activeSection,
    updateScrollVisibility,
    toggleMenuState,
    setMenuState,
    updateActiveSection,
  };
}; 