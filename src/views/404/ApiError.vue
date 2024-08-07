<script setup>
import { useRouter } from 'vue-router';
import Button from 'primevue/button';
import Card from 'primevue/card';

const router = useRouter();
const goBack = () => {
  router.back();
};
</script>

<template>
  <main class="">
    <Card class="h-screen w-screen flex items-center justify-center">
      <template #title>500 - Erro no lado do servidor</template>
      <template #content>
        <p class="text large">Desculpe, entre em contato caso persista.</p>
        <Button label="Voltar para a página anterior" icon="pi pi-arrow-left" class="mt-9" @click="goBack" />
      </template>
    </Card>
  </main>
</template>
