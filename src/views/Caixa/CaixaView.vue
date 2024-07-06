<template>
    <AppTemplate title="Pagar e receber">
        <DataTables :columns="columns" :data="caixaInfraStore.allCaixas" :generateActionItems="generateActionItems" actionColumn />
        <VerCaixa :idUser="caixaIdview" />
        <EditarCaixa :idUser="viewIdEdit" />
        <CadastrarCaixa :visible="caixaInfraStore.visibleCreateCaixa"/>
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

const caixaInfraStore = CaixaInfraStore();

onMounted(async ()=>{
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
        field: 'numeroNota',
        header: 'Numero da nota',
        filterComponent: InputNumber,
        filter: true,
        filterMatchMode: FilterMatchMode.EQUALS
    }
];

const caixaIdview = ref(null);
const viewIdEdit = ref(null);

const generateActionItems = (id) => {
    return [
        {
            label: `Ver ${id}`,
            icon: 'pi pi-search',
            command: () => verCaixa(id)
        },
        {
            label: `Editar ${id}`,
            icon: 'pi pi-file-edit',
            command: () => editarCaixa(id)
        },
        {
            label: `Excluir ${id}`,
            icon: 'pi pi-trash',
            command: () => alert(`Excluir item ${id}`)
        }
    ];
};

const verCaixa = (id) => {
    caixaInfraStore.openModal('view');
    caixaIdview.value = id;
};

const editarCaixa = (id) => {
    caixaInfraStore.openModal('edit');
    viewIdEdit.value = id;
}

const createCaixa = (id) => {
    caixaInfraStore.openModal('create');
}

</script>
