<script setup>
import { RouterLink } from "vue-router";
import Button from 'primevue/button';
import Card from 'primevue/card';

</script>
<template>
  <main class="">
    <Card class="h-screen w-screen flex items-center justify-center">
      <template #title>404 - Pagina não encontrada</template>
      <template #content>
        <p class="text large">Desculpe mas a rota solicitada não está mapeada em nossa aplicação</p>
        <RouterLink to="/" class="">
            <Button label="Voltar para pagina inical" icon="pi pi-home" class=" mt-9 " />
          </RouterLink>
      </template>
    </Card>
  </main>
</template>
