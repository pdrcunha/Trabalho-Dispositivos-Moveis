<template>
  <BaseModal header="Ver Caixa" :visible="caixaInfraStore.visibleViewCaixa" :closeFn="() => caixaInfraStore.closeModal('view')">
    <h1>id:{{ form.id }}</h1>
    <div class="form-group">
      <label for="name" class="block text-sm font-medium">Nome</label>
      <InputText disabled id="name" v-model="form.name" type="text" class="mt-1 block w-full" placeholder="Nome" />
    </div>
    <div class="form-group">
      <label for="email" class="block text-sm font-medium">Email</label>
      <InputText disabled id="email" v-model="form.email" type="email" class="mt-1 block w-full" placeholder="Email" />
    </div>
    <div class="form-group">
      <label for="telefone" class="block text-sm font-medium">Telefone</label>
      <InputText disabled id="telefone" v-model="form.telefone" type="text" class="mt-1 block w-full" placeholder="Telefone" />
    </div>
    <div class="form-group">
      <label for="endereco" class="block text-sm font-medium">Endereço</label>
      <InputText disabled id="endereco" v-model="form.endereco" type="text" class="mt-1 block w-full" placeholder="Endereço" />
    </div>
    <div class="form-group col-span-2">
      <label for="status" class="block text-sm font-medium">Status</label>
      <InputText disabled id="status" v-model="form.status" type="text" class="mt-1 block w-full" placeholder="Status" />
    </div>
  </BaseModal>
</template>

<script setup>
import { ref, watch } from 'vue';
import BaseModal from '@/components/BaseModal.vue';
import InputText from 'primevue/inputtext';
import { CaixaInfraStore } from '@/stores/CaixaInfraStore';

const caixaInfraStore = CaixaInfraStore();

const form = ref({
  id: '',
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


watch(() => props.idUser, async (newId) => {
  form.value = await caixaInfraStore.getCaixa(newId);
});
</script>
