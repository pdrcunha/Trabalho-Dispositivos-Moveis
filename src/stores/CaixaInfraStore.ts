import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import type { Caixa, PostCaixa } from '@/entity/Caixa';
import apiClient from '@/https/axiosConfig';
import { useToast } from 'primevue/usetoast';


export const CaixaInfraStore = defineStore('CaixaInfra', () => {
  const visibleCreateCaixa = ref(false);
  const visibleViewCaixa = ref(false);
  const visibleEditCaixa = ref(false);
  const actualCaixa = ref(null);
  const allCaixas = ref([]);

  const visibilityMap: Record<string, Ref> = {
    view: visibleViewCaixa,
    edit: visibleEditCaixa,
    create: visibleCreateCaixa
  };

  const toast = useToast();

  const openModal = (type: "view" | "edit" | "create"): void => {
    visibilityMap[type].value = true;
  }

  const closeModal = (type: "view" | "edit" | "create"): void => {
    visibilityMap[type].value = false;
  }

  const postCaixa = async (usr: PostCaixa): Promise<boolean> => {
    try {
      const response = await apiClient.post('caixa', usr);
      toast.add({ severity: 'success', summary: 'success', detail: 'Controle Cadastrado.', life: 3000 });
      return true;
    } catch (error) {
      console.error('Erro ao fazer o POST para /caixa:', error);
      return false
    }
  }

  const updateCaixa = async (id:number, caixa: Caixa): Promise<boolean> => {
    try {          
      const response = await apiClient.put('caixa/'+id,caixa);
      toast.add({ severity: 'success', summary: 'success', detail: 'Controle Atualizado.', life: 3000 });
      return response.data; // Retorna apenas os dados (response.data)
    } catch (error) {
      console.error('Erro ao fazer o PUT para /caixa:', error);
      throw error; // Lança o erro para tratamento externo, se necessário
    }
  }

  const getAllCaixas = async (): Promise<Array<Caixa>> => {
    try {
      const response = await apiClient.get('caixa');
      return response.data; // Retorna apenas os dados (response.data)
    } catch (error) {
      console.error('Erro ao fazer o GET para /caixa:', error);
      throw error; // Lança o erro para tratamento externo, se necessário
    }
  };

  const getCaixa = async (id: number): Promise<Caixa> => {
    try {
      const response = await apiClient.get('caixa/' + id);
      actualCaixa.value = response.data;      
      return response.data; // Retorna apenas os dados (response.data)
    } catch (error) {
      console.error('Erro ao fazer o GET para /caixa/:'+id, error);
      throw error; // Lança o erro para tratamento externo, se necessário
    }
  };

  const deleteCaixa = async (id: number): Promise<Caixa> => {
    try {
      const response = await apiClient.delete('caixa/' + id);
      actualCaixa.value = response.data;      
      toast.add({ severity: 'success', summary: 'success', detail: 'Controle deletado.', life: 3000 });
      return response.data; // Retorna apenas os dados (response.data)
    } catch (error) {
      console.error('Erro ao fazer o DELETE para /caixa/:'+id, error);
      throw error; // Lança o erro para tratamento externo, se necessário
    }
  };

  return {
    allCaixas,
    visibleCreateCaixa,
    visibleViewCaixa,
    visibleEditCaixa,
    actualCaixa,
    postCaixa,
    updateCaixa,
    openModal,
    deleteCaixa,
    closeModal,
    getAllCaixas,
    getCaixa
  }
})

