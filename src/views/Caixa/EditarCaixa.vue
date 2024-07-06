<template>
    <BaseModal header="Editar caixa" :visible="caixaInfraStore.visibleEditCaixa" :closeFn="()=>caixaInfraStore.closeModal('edit')">
        <form @submit.prevent="handleSubmit" class="space-y-4 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-4">
            <div class="form-group">
                <label for="name" class="block text-sm font-medium">Nome</label>
                <InputText id="name" v-model="form.name" type="text" class="mt-1 block w-full" placeholder="Nome" />
            </div>
            <div class="form-group">
                <label for="email" class="block text-sm font-medium">Email</label>
                <InputText id="email" v-model="form.email" type="email" class="mt-1 block w-full" placeholder="Email" />
            </div>
            <div class="form-group">
                <label for="telefone" class="block text-sm font-medium">Telefone</label>
                <InputText id="telefone" v-model="form.telefone" type="text" class="mt-1 block w-full" placeholder="Telefone" />
            </div>
            <div class="form-group">
                <label for="endereco" class="block text-sm font-medium">Endereço</label>
                <InputText id="endereco" v-model="form.endereco" type="text" class="mt-1 block w-full" placeholder="Endereço" />
            </div>
            <div class="form-group col-span-2">
                <label for="status" class="block text-sm font-medium">Status</label>
                <InputText id="status" v-model="form.status" type="text" class="mt-1 block w-full" placeholder="Status" />
            </div>
            <div class="col-span-2 flex justify-end">
                <Button label="Editar" @click="handleSubmit"/>
            </div>
        </form>
    </BaseModal>
</template>

<script setup>
import { ref, watch } from 'vue';
import BaseModal from '@/components/BaseModal.vue';
import InputText from 'primevue/inputtext';
import { CaixaInfraStore } from '@/stores/CaixaInfraStore';
import Button from 'primevue/button';

const caixaInfraStore = CaixaInfraStore()
const form = ref({
    name: '',
    email: '',
    telefone: '',
    endereco: '',
    status: ''
});

const props = defineProps({
  idUser: {
    required: true
  }
});

const handleSubmit = async () => {
    const result = await caixaInfraStore.updateCaixa(form);
    const caixas = await caixaInfraStore.getAllCaixas();
    caixaInfraStore.allCaixas = caixas;
    caixaInfraStore.visibleEditUser = false;
};


watch(() => props.idUser, async (newId) => {
  form.value = await caixaInfraStore.getCaixa(newId);
});

</script>
