import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchCourseData, setLanguage, clearError, clearData } from '@/store/slices/courseSlice';

export const useCourse = () => {
  const dispatch = useAppDispatch();
  const { data, language, loading, error } = useAppSelector((state) => state.course);

  const changeLanguage = (newLanguage: 'en' | 'bn') => {
    dispatch(setLanguage(newLanguage));
    // Update URL without page reload
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.set('lang', newLanguage);
      window.history.pushState({}, '', url.toString());
    }
  };

  const refetchData = () => {
    dispatch(fetchCourseData(language));
  };

  const clearErrorState = () => {
    dispatch(clearError());
  };

  const clearCourseData = () => {
    dispatch(clearData());
  };

  return {
    data,
    language,
    loading,
    error,
    changeLanguage,
    refetchData,
    clearErrorState,
    clearCourseData,
  };
}; 