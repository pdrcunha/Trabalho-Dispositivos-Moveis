<template>
    <div class="card flex justify-center">
        <Dialog v-model:visible="props.visible" modal class="w-full m-2 " :closable="false">
            <template #header>
                <div class="flex justify-between w-full items-center">
                    {{ props.header }}
                    <Button icon="pi pi-times" @click="props.closeFn" text rounded aria-label="Cancel" />
                </div>
            </template>
            <slot></slot>
        </Dialog>
    </div>
</template>

<script setup>
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';

const props = defineProps({
    header: {
        type: String,
        required: true
    },
    visible: {
        type: Boolean,
        required: true
    },
    closeFn:{
        required:true
    }
});

</script>
