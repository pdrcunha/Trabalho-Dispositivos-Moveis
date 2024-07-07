<template>
    <div class="form-group mb-4">
        <label :for="props.for" class="block text-sm font-medium text-surface-300">{{props.name}}</label>
        <slot></slot>
    </div>
</template>


<script setup lang="ts">
import {ref,defineProps} from "vue";
const props = defineProps({
    for:{
        required: true
    },
    name:{
        required:true
    }
});
</script>