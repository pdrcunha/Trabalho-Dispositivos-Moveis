<template>
    <BaseModal header="Editar caixa" :visible="caixaInfraStore.visibleEditCaixa"
        :closeFn="() => caixaInfraStore.closeModal('edit')">
        <form @submit.prevent="handleSubmit" class="space-y-4 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-4">
            <InputBase for="Descricao" name="Descrição">
                <InputText id="Descricao" v-model="form.descricao" type="text" class="mt-1 block w-full" />
            </InputBase>
            <InputBase for="tipo" name="Tipo">
                <InputText id="tipo" v-model="form.tipo" type="text" class="mt-1 block w-full" />
            </InputBase>
            <InputBase for="cliente" name="Cliente">
                <InputText id="cliente" v-model="form.cliente" type="text" class="mt-1 block w-full" />
            </InputBase>
            <InputBase for="valor" name="Valor">
                <InputText id="valor" v-model="form.valor" type="text" class="mt-1 block w-full" />
            </InputBase>
            <InputBase for="numero_nota" name="Numero Nota">
                <InputText id="numero_nota" v-model="form.numero_nota" type="text" class="mt-1 block w-full" />
            </InputBase>
            <div class="col-span-2 flex justify-end">
                <Button label="Editar" @click="handleSubmit" />
            </div>
        </form> 
    </BaseModal>
 
</template>

<script setup>
import BaseModal from '@/components/BaseModal.vue';
import InputText from 'primevue/inputtext';
import { CaixaInfraStore } from '@/stores/CaixaInfraStore';
import Button from 'primevue/button';
import InputBase from '@/components/InputBase.vue';
import { computed } from 'vue';

const caixaInfraStore = CaixaInfraStore()
const form = computed(() => caixaInfraStore.actualCaixa); 


const handleSubmit = async () => {
    const result = await caixaInfraStore.updateCaixa(form.value.id,form.value);
    const caixas = await caixaInfraStore.getAllCaixas();
    caixaInfraStore.allCaixas = caixas;
    caixaInfraStore.visibleEditCaixa = false;
};

</script>
