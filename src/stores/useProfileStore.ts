// stores/ProfileStore.ts
import apiClient from '@/https/axiosConfig';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useProfileStore = defineStore('Profile', () => {
  const meProfile = ref(null);
  const token = ref(localStorage.getItem('token'));

  const setToken = (newToken: string) => {
    token.value = newToken;
    localStorage.setItem('token', newToken);
  };

  const getMyUserData = async () => {
    const response = await apiClient.get('users/me');   
    return response.data;
  }

  const clearToken = () => {
    token.value = null;
    localStorage.removeItem('token');
  };

  return {
    meProfile,
    token,
    setToken,
    getMyUserData,
    clearToken,
  };
});
