<template>
    <AppTemplate title="Controle de Clientes">
       
        <DataTables :columns="columns" :data="userInfraStore.allUsers" :generateActionItems="generateActionItems" actionColumn />
        <VerCliente :idUser="userIdview" ></VerCliente>
        <EditarCliente :idUser="viewIdEdit" ></EditarCliente>
        <CadastrarCliente :visible="userInfraStore.visibleCreateUser"></CadastrarCliente>
    </AppTemplate>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { FilterMatchMode } from 'primevue/api';
import InputText from 'primevue/inputtext';
import Calendar from 'primevue/calendar';
import InputNumber from 'primevue/inputnumber';
import DataTables from '@/components/DataTables.vue';
import AppTemplate from '@/templates/AppTemplate.vue';
import VerCliente from "./VerCliente.vue";
import EditarCliente from "./EditarCliente.vue";
import CadastrarCliente from './CadastrarCliente.vue';
import { UserInfraStore } from '@/stores/UserInfraStore';
import Button from 'primevue/button';

const userInfraStore = UserInfraStore()
onMounted(async ()=>{
    const users = await userInfraStore.getAllUsers();
    userInfraStore.allUsers = users;
});

const columns = [
    {
        field: 'name',
        header: 'Nome',
        filterComponent: InputText,
        filter: true
    },
    {
        field: 'email',
        header: 'Email',
        filterComponent: InputText,
        filter: true
    },
    {
        field: 'telefone',
        header: 'Telefone',
        filterComponent: InputText,
        filter: true
    },
    {
        field: 'endereco',
        header: 'Endereço',
        filterComponent: Calendar,
        filter: true,
        filterMatchMode: FilterMatchMode.DATE_IS
    },
    {
        field: 'status',
        header: 'Status',
        filterComponent: InputNumber,
        filter: true,
        filterMatchMode: FilterMatchMode.EQUALS
    }
];

const userIdview = ref(null);
const viewIdEdit = ref(null);

const generateActionItems = (id) => {
    return [
        {
            label: `Ver ${id}`,
            icon: 'pi pi-search',
            command: () => verCliente(id)
        },
        {
            label: `Editar ${id}`,
            icon: 'pi pi-file-edit',
            command: () => editCliente(id)
        },
        {
            label: `Excluir ${id}`,
            icon: 'pi pi-trash',
            command: () => alert(`Excluir item ${id}`)
        }
    ];
};

const verCliente = (id) => {
    userInfraStore.openModal('view');
    userIdview.value = id;

};

const editCliente = (id) => {
    userInfraStore.openModal('edit');
    viewIdEdit.value = id;
}

const createUser = (id) => {
    userInfraStore.openModal('create');
}

</script>
