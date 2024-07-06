<template>
  <nav class="card flex justify-center bg-surface-800 menu-app-fo">
    <Sidebar v-model:visible="visible" header="Menu">
      <div class="card flex justify-center">
        <div
          class="w-full min-w-[12rem] rounded-md py-2 bg-surface-0 dark:bg-surface-700 text-surface-700 dark:text-white/80 border border-surface-200 dark:border-surface-700l">
          <RouterLink v-for="link in items" :to="link.link">
            <Button :label="link.label" :icon="link.icon" class="w-full" text />
          </RouterLink>
          <Button label="Sair" icon="pi pi-sign-out" class="w-full" text severity="danger" />
        </div>
      </div>
    </Sidebar>
    <Button icon="pi pi-bars" @click="visible = true" size="small" />
  </nav>
</template>

<script setup>
import { ref } from "vue";
import Sidebar from 'primevue/sidebar';
import Button from 'primevue/button';
import { RouterLink } from "vue-router";

const visible = ref(false);
const items = ref([
  { label: 'Meu Perfil', icon: 'pi pi-user-edit', link:"/perfil"},
  { label: 'Clientes', icon: 'pi pi-user', link:"/clientes"},
  { label: 'Caixa', icon: 'pi pi-shopping-cart', link:"/caixa"},
]);
</script>
