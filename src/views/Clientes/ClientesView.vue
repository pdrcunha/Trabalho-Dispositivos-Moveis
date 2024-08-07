<template>
    <AppTemplate title="Controle de Clientes">
        <DataTables :columns="columns" :data="userInfraStore.allUsers" :generateActionItems="generateActionItems"
            actionColumn>
            <template #button>
                <Button icon="pi pi-plus" outlined @click="createUser"></Button>
            </template>
        </DataTables>
        <VerCliente ></VerCliente>
        <EditarCliente ></EditarCliente>
        <CadastrarCliente></CadastrarCliente>
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

onMounted(async () => {
    document.title = 'Clientes';
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
            label: `Ver`,
            icon: 'pi pi-search',
            command: () => verCliente(id)
        },
        {
            label: `Editar`,
            icon: 'pi pi-file-edit',
            command: () => editCliente(id)
        },
        {
            label: `Excluir`,
            icon: 'pi pi-trash',
            command: () => excluirCliente(id)
        }
    ];
};

const verCliente = (id) => {
    userInfraStore.openModal('view');
    userIdview.value = id;

};

const editCliente = async(id) => {
    await userInfraStore.getUser(id);
    userInfraStore.openModal('edit');

}

const createUser = (id) => {   
    userInfraStore.openModal('create');
}

const excluirCliente = async (id) => {
    await userInfraStore.deleteUser(id);
    const caixas = await userInfraStore.getAllUsers();
    userInfraStore.allUsers = caixas;
}

</script>
