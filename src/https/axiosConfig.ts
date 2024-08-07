// services/apiClient.ts
import router from '@/router';
import axios from 'axios';
import { useProfileStore } from '@/stores/useProfileStore';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Adicionar um interceptor de requisição para incluir o token em todas as requisições
apiClient.interceptors.request.use(config => {
  const profileStore = useProfileStore();
  const token = profileStore.token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Adicionar um interceptor de resposta para redirecionar em caso de status 401
apiClient.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      // Redirecionar para a tela de login
      router.push({ name: 'home' });
    }
    return router.push({ name: '500' });
  }
);

export default apiClient;
