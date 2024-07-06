<template>
    <DataTable v-model:filters="filters" :value="data" paginator showGridlines :rows="10" dataKey="id"
        filterDisplay="menu">
        <template #header>
            <div class="flex justify-between">
                <Button type="button" icon="pi pi-filter-slash" outlined @click="clearFilter()" />
                <span class="relative">
                    <i class="pi pi-search absolute top-2/4 -mt-2 left-3 text-surface-400 dark:text-surface-600" />
                    <InputText v-model="filters['global'].value" placeholder="Pesquise" class="pl-10 font-normal" />
                </span>
            </div>
        </template>
        <template #empty>
            <span class="text-primary">
                Sem dados cadastrados.
            </span>
        </template>
        <template #loading> Carregando, aguarde. </template>
        <Column v-for="col in columns" :key="col.field" :field="col.field" :header="col.header" :style="col.style">
            <template #body="slotProps">
                <span>{{ slotProps.data[col.field] }}</span>
            </template>
            <template #filter="{ filterModel }">
                <component :is="col.filterComponent" v-model="filterModel.value" :filter="filterModel" />
            </template>
        </Column>
        <Column v-if="actionColumn" field="actions" header="Ações" dataType="boolean" bodyClass="text-center"
            style="min-width: 8rem">
            <template #body="{ data }">
                <Button type="button" label="Ações" @click="toggle($event, data.id)" aria-haspopup="true"
                    aria-controls="overlay_tmenu" />
                <TieredMenu ref="menu" id="overlay_tmenu" :model="currentActionItems" popup />
            </template>
        </Column>
    </DataTable>
</template>

<script setup>
import { ref, watch } from 'vue';
import { FilterMatchMode, FilterOperator } from 'primevue/api';
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import TieredMenu from 'primevue/tieredmenu';

const props = defineProps({
    columns: {
        type: Array,
        required: true
    },
    data: {
        type: Array,
        required: true
    },
    generateActionItems: {
        type: Function,
        required: true
    },
    actionColumn: {
        type: Boolean,
        default: false
    }
});

const filters = ref();

const initFilters = () => {
    filters.value = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    };
    props.columns.forEach(col => {
        if (col.filter) {
            filters.value[col.field] = { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: col.filterMatchMode || FilterMatchMode.STARTS_WITH }] };
        }
    });
};

initFilters();

const clearFilter = () => {
    initFilters();
};

const menu = ref();
const currentActionItems = ref([]);

const toggle = (event, id) => {
    currentActionItems.value = props.generateActionItems(id);
    menu.value.toggle(event);
};

watch(() => props.columns, initFilters);
</script>
