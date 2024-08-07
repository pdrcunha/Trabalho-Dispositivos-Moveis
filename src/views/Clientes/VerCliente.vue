<template>
  <BaseModal header="Ver Usuário" :visible="userInfraStore.visibleViewUser" :closeFn="() => userInfraStore.closeModal('view')">
    <InputBase for="name" name="Nome">
      <InputText disabled id="name" v-model="form.name" type="text" class="mt-1 block w-full" placeholder="Nome" />
    </InputBase>
    <InputBase for="email" name="Email">
      <InputText disabled id="email" v-model="form.email" type="email" class="mt-1 block w-full" placeholder="Email" />
    </InputBase>
    <InputBase for="telefone" name="Telefone">
      <InputText disabled id="telefone" v-model="form.telefone" type="text" class="mt-1 block w-full" placeholder="Telefone" />
    </InputBase>
    <InputBase for="endereco" name="Endereço">
      <InputText disabled id="endereco" v-model="form.endereco" type="text" class="mt-1 block w-full" placeholder="Endereço" />
    </InputBase>
    <InputBase for="status" name="Status">
      <InputText disabled id="status" v-model="form.status" type="text" class="mt-1 block w-full" placeholder="Status" />
    </InputBase>
  </BaseModal>
</template>

<script setup>
import { computed, ref, watch } from 'vue';
import BaseModal from '@/components/BaseModal.vue';
import InputText from 'primevue/inputtext';
import { UserInfraStore } from '@/stores/UserInfraStore';
import InputBase from '@/components/InputBase.vue';

const userInfraStore = UserInfraStore();

const props = defineProps({
  idUser: {
    required: true
  }
});


const form = computed (() => userInfraStore.actualUser); 
</script>
