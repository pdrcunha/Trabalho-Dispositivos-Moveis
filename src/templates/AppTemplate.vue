<template class="facade ">
    <div class="h-screen flex flex-col">
        <header class="relative flex justify-between items-center p-4 shadow-md bg-surface-800 text-primary">
            <SideMenu></SideMenu>
            <h2 class="text-xl font-semibold absolute left-1/2 transform -translate-x-1/2 ">
                {{ props.title }}
            </h2>
            <div class="flex-1 flex justify-end">
            </div>
        </header>
        <main class="flex-1 p-4 bg-surface-800 overflow-auto">
            <slot></slot>
        </main>
    </div>
</template>

<script setup>
import SideMenu from '@/components/SideMenu.vue';

const props = defineProps({
    title: {
        required: true,
        default: "Frente Caixa"
    }
})
</script>

<style scoped>
html,
body {
    height: 100%;
    margin: 0;
    padding: 0;
}
</style>
