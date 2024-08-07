<template>
  <BaseModal header="Ver Caixa" :visible="caixaInfraStore.visibleViewCaixa" :closeFn="() => caixaInfraStore.closeModal('view')">
    <InputBase for="Descricao" name="Descrição">
      <InputText disabled id="Descricao" v-model="form.descricao" type="text" class="mt-1 block w-full" />
    </InputBase>
    <InputBase for="tipo" name="Tipo">
      <InputText disabled id="tipo" v-model="form.tipo" type="text" class="mt-1 block w-full" />
    </InputBase>
    <InputBase for="cliente" name="Cliente">
      <InputText disabled id="cliente" v-model="form.cliente" type="text" class="mt-1 block w-full" />
    </InputBase>
    <InputBase for="valor" name="Valor">
      <InputText disabled id="valor" v-model="form.valor" type="text" class="mt-1 block w-full" />
    </InputBase>
    <InputBase for="numero_nota" name="Numero Nota">
      <InputText disabled id="numero_nota" v-model="form.numero_nota" type="text" class="mt-1 block w-full" />
    </InputBase>
  </BaseModal>
</template>

<script setup>

import BaseModal from '@/components/BaseModal.vue';
import InputText from 'primevue/inputtext';
import { CaixaInfraStore } from '@/stores/CaixaInfraStore';
import { computed } from 'vue';
import InputBase from '@/components/InputBase.vue';

const caixaInfraStore = CaixaInfraStore();
const form = computed(() => caixaInfraStore.actualCaixa); 


</script>
