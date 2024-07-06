import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'


export const UserInfraStore = defineStore('UserInfra', () => {
  const visibleCreateUser = ref(false);
  const visibleViewUser = ref(false);
  const visibleEditUser = ref(false);
  const allUsers = ref([]);

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

  const postUser = async (usr: User): Promise<boolean> => {
    return true;
  }

  const updateUser = async (usr: User): Promise<boolean> => {
    return true;
  }

  const getAllUsers = async (id: number): Promise<Array<User>> => {
    return [
      {
        id: 1,
        name: 'TESTE 1' + Math.random(),
        email: 'TESTE 1',
        telefone: 'TESTE 1',
        endereco: 'TESTE 1',
        status: true
      },
      {
        id: 2,
        name: 'TESTE 2',
        email: 'TESTE 2',
        telefone: 'TESTE 2',
        endereco: 'TESTE 2',
        status: true
      },
      {
        id: 3,
        name: 'TESTE 3',
        email: 'TESTE 3',
        telefone: 'TESTE 3',
        endereco: 'TESTE 3',
        status: true
      },
    ];
  };

  const getUser = async (id: number): Promise<User> => {
    return {
      id: id,
      name: 'TESTE'+ id,
      email: 'TESTE'+ id,
      telefone: 'TESTE'+ id,
      endereco: 'TESTE'+ id,
      status: true
    };
  };

  return {
    allUsers,
    visibleCreateUser,
    visibleViewUser,
    visibleEditUser,
    postUser,
    updateUser,
    openModal,
    closeModal,
    getAllUsers,
    getUser
  }
})

