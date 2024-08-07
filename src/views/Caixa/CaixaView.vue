<template>
    <AppTemplate title="Pagar e receber">
        <DataTables :columns="columns" :data="caixaInfraStore.allCaixas" :generateActionItems="generateActionItems" actionColumn >
            <template #button>
                <Button icon="pi pi-plus" outlined @click="createCaixa"></Button>
            </template>
        </DataTables> 
        <VerCaixa />
        <EditarCaixa />
        <CadastrarCaixa />
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
import VerCaixa from "./VerCaixa.vue";
import EditarCaixa from "./EditarCaixa.vue";
import CadastrarCaixa from './CadastrarCaixa.vue';
import { CaixaInfraStore } from '@/stores/CaixaInfraStore';
import Button from 'primevue/button';

const caixaInfraStore = CaixaInfraStore();

onMounted(async ()=>{
    document.title = 'Caixa';
    const caixas = await caixaInfraStore.getAllCaixas();
    caixaInfraStore.allCaixas = caixas;
});

const columns = [
    {
        field: 'descricao',
        header: 'Descrição',
        filterComponent: InputText,
        filter: true
    },
    {
        field: 'tipo',
        header: 'Tipo',
        filterComponent: InputText,
        filter: true
    },
    {
        field: 'cliente',
        header: 'Cliente',
        filterComponent: InputText,
        filter: true
    },
    {
        field: 'valor',
        header: 'Valor',
        filterComponent: Calendar,
        filter: true,
        filterMatchMode: FilterMatchMode.DATE_IS
    },
    {
        field: 'numero_nota',
        header: 'Numero da nota',
        filterComponent: InputNumber,
        filter: true,
        filterMatchMode: FilterMatchMode.EQUALS
    }
];


const generateActionItems = (id) => {
    return [
        {
            label: `Ver`,
            icon: 'pi pi-search',
            command: () => verCaixa(id)
        },
        {
            label: `Editar`,
            icon: 'pi pi-file-edit',
            command: () => editarCaixa(id)
        },
        {
            label: `Excluir`,
            icon: 'pi pi-trash',
            command: () => excluirCaixa(id)
        }
    ];
};

const verCaixa = async (id) => {
    await caixaInfraStore.getCaixa(id);
    caixaInfraStore.openModal('view');
};

const editarCaixa = async (id) => {
    await caixaInfraStore.getCaixa(id);
    caixaInfraStore.openModal('edit');
}

const excluirCaixa = async (id) => {
    await caixaInfraStore.deleteCaixa(id);
    const caixas = await caixaInfraStore.getAllCaixas();
    caixaInfraStore.allCaixas = caixas;
}

const createCaixa = () => {
    caixaInfraStore.openModal('create');
}

</script>
