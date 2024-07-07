<template>
  <main class="w-screen h-screen flex items-center justify-center bg-surface-800">
    <Card class="m-4">
      <template #title>Login</template>
      <template #content>
          <InputText type="text" v-model="value" placeholder="Email" class="w-full mt-4" />
          <Password v-model="value" toggleMask placeholder="Senha" :feedback="false" class="w-full mt-4" />
          <Button label="Entrar" class="mt-4 w-full"/>
      </template>
    </Card>
  </main>
</template>

<script setup>

import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Button from 'primevue/button';
import Card from 'primevue/card';
import { onMounted } from 'vue';

onMounted(()=>{
    document.title = 'Login';
});

</script>
