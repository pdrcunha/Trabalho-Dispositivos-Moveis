<template>
    <AppTemplate title="Meu Perfil">
        <div class="flex flex-col items-center m2">
            <Avatar :label="profile.fullName.split('')[0]" class="" size="xlarge" shape="circle" />
        </div>
        <div class="flex flex-col">
            <InputBase for="nome" name="Nome">
                <InputText id="nome" v-model="profile.fullName" type="text" class="mt-1 block w-full"/>
            </InputBase>
            <InputBase for="email" name="Email">
                <InputText id="email" v-model="profile.email" type="email" class="mt-1 block w-full" />
            </InputBase>
            <InputBase for="login" name="Login">
                <InputText id="login" v-model="profile.username" type="text" class="mt-1 block w-full" />
            </InputBase>
        </div>

    </AppTemplate>
</template>

<script setup>
import InputBase from '@/components/InputBase.vue';
import Avatar from 'primevue/avatar';
import AppTemplate from '@/templates/AppTemplate.vue';
import { onMounted, ref } from 'vue';
import InputText from 'primevue/inputtext';
import { useProfileStore } from '@/stores/useProfileStore';

const userInfraStore = useProfileStore();
const profile = ref({
    fullName: '',
    email: null,
    username: null
});

onMounted(async () => {
    document.title = 'Perfil';
    profile.value = await userInfraStore.getMyUserData();    
});


</script>


