import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import type { PostUser, User } from '@/entity/User';
import apiClient from '@/https/axiosConfig';
import { useToast } from 'primevue/usetoast';


export const UserInfraStore = defineStore('UserInfra', () => {
  const visibleCreateUser = ref(false);
  const visibleViewUser = ref(false);
  const visibleEditUser = ref(false);
  const actualUser = ref(null);
  const allUsers = ref([]);

  const toast = useToast();

  const visibilityMap: Record<string, Ref> = {
    view: visibleViewUser,
    edit: visibleEditUser,
    create: visibleCreateUser
  };

  const openModal = (type: "view" | "edit" | "create"): void => {
    visibilityMap[type].value = true;
  }

  const closeModal = (type: "view" | "edit" | "create"): void => {
    visibilityMap[type].value = false;
  }

  const postUser = async (usr: PostUser): Promise<boolean> => {
    try {
      const response = await apiClient.post('usuarios', usr);
      toast.add({ severity: 'success', summary: 'success', detail: 'Usuários Cadastrado.', life: 3000 });
      return true;
    } catch (error) {
      console.error('Erro ao fazer o POST para /usuarios:', error);
      return false
    }
  }

  const updateUser = async (id:number, usr: User): Promise<boolean> => {
    try {
      const response = await apiClient.put('usuarios/'+id, usr);
      toast.add({ severity: 'success', summary: 'success', detail: 'Usuários Atualizado.', life: 3000 });
      return response.data; // Retorna apenas os dados (response.data)
    } catch (error) {
      console.error('Erro ao fazer o PUT para /usuarios:', error);
      throw error; // Lança o erro para tratamento externo, se necessário
    }
  }

  const getAllUsers = async (id: number): Promise<Array<User>> => {
    try {
      const response = await apiClient.get('usuarios');
      return response.data; // Retorna apenas os dados (response.data)
    } catch (error) {
      console.error('Erro ao fazer o GET para /usuarios:', error);
      throw error; // Lança o erro para tratamento externo, se necessário
    }
  };

  const getUser = async (id: number): Promise<User> => {
    try {
      const response = await apiClient.get('usuarios/'+id);
      actualUser.value = response.data     
      return response.data; // Retorna apenas os dados (response.data)
    } catch (error) {
      console.error('Erro ao fazer o GET para /usuarios/:'+id, error);
      throw error; // Lança o erro para tratamento externo, se necessário
    }
  };

  const deleteUser = async (id:number): Promise<boolean> => {
    try {
      const response = await apiClient.delete('usuarios/'+id);
      toast.add({ severity: 'success', summary: 'success', detail: 'Usuários Deletado.', life: 3000 });
      return response.data; // Retorna apenas os dados (response.data)
    } catch (error) {
      console.error('Erro ao fazer o PUT para /usuarios:', error);
      throw error; // Lança o erro para tratamento externo, se necessário
    }
  }

  return {
    allUsers,
    visibleCreateUser,
    visibleViewUser,
    actualUser,
    visibleEditUser,
    postUser,
    deleteUser,
    updateUser,
    openModal,
    closeModal,
    getAllUsers,
    getUser
  }
})

