import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'


export const CaixaInfraStore = defineStore('CaixaInfra', () => {
  const visibleCreateCaixa = ref(false);
  const visibleViewCaixa = ref(false);
  const visibleEditCaixa = ref(false);
  const allCaixas = ref([]);

  const visibilityMap: Record<string, Ref> = {
    view: visibleViewCaixa,
    edit: visibleEditCaixa,
    create: visibleCreateCaixa
  };

  const openModal = (type: "view" | "edit" | "create"): void => {
    visibilityMap[type].value = true;
  }

  const closeModal = (type: "view" | "edit" | "create"): void => {
    visibilityMap[type].value = false;
  }

  const postCaixa = async (usr: Caixa): Promise<boolean> => {
    return true;
  }

  const updateCaixa = async (usr: Caixa): Promise<boolean> => {
    return true;
  }

  const getAllCaixas = async (id: number): Promise<Array<Caixa>> => {
    return [
      {
        id: 1,
        descricao: 'string',
        tipo: 'string',
        cliente: 'string',
        valor: 'string',
        numeroNota: 22,
      },
      {
        id: 2,
        descricao: 'string',
        tipo: 'string',
        cliente: 'string',
        valor: 'string',
        numeroNota: 33,
      },
    ];
  };

  const getCaixa = async (id: number): Promise<Caixa> => {
    return{
      id: 2,
      descricao: 'string'+id,
      tipo: 'string'+id,
      cliente: 'string'+id,
      valor: 'string'+id,
      numeroNota: 33,
    }
  };

  return {
    allCaixas,
    visibleCreateCaixa,
    visibleViewCaixa,
    visibleEditCaixa,
    postCaixa,
    updateCaixa,
    openModal,
    closeModal,
    getAllCaixas,
    getCaixa
  }
})

