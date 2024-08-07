<template>
    <BaseModal header="Cadastar Caixa" :visible="caixaInfraStore.visibleCreateCaixa" :closeFn="() => caixaInfraStore.closeModal('create')">
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
                <Button label="Cadastrar" @click="handleSubmit"/>
            </div>
        </form>
    </BaseModal>
</template>

<script setup>
import { ref } from 'vue';
import BaseModal from '@/components/BaseModal.vue';
import InputText from 'primevue/inputtext';
import { CaixaInfraStore } from '@/stores/CaixaInfraStore';
import Button from 'primevue/button';
import InputBase from '@/components/InputBase.vue';



const caixaInfraStore = CaixaInfraStore()
const form = ref({
    name: '',
    email: '',
    telefone: '',
    endereco: '',
    status: ''
});

const handleSubmit = async () => {
    const result = await caixaInfraStore.postCaixa(form.value);
    const caixas = await caixaInfraStore.getAllCaixas();
    caixaInfraStore.allCaixas = caixas;
    caixaInfraStore.visibleCreateCaixa = false;
};


</script>
