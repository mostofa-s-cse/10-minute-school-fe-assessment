import { ApiResponse, Language } from '@/types/api';

const API_BASE_URL = 'https://api.10minuteschool.com/discovery-service/api/v1';

export const fetchIELTSCourseData = async (language: Language): Promise<ApiResponse> => {
  const url = `${API_BASE_URL}/products/ielts-course?lang=${language}`;
  
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'X-TENMS-SOURCE-PLATFORM': 'web',
      'accept': 'application/json',
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data: ApiResponse = await response.json();
  return data;
};
