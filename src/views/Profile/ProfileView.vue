<template>
    <AppTemplate title="Meu Perfil">
        <div class="flex flex-col items-center m2">
            <Avatar label="P" class="" size="xlarge" shape="circle" />
        </div>
        <div class="flex flex-col">
            <div class="form-group mb-4">
                <label for="nome" class="block text-sm font-medium">Nome</label>
                <InputText id="nome" v-model="profile.name" type="text" class="mt-1 block w-full" placeholder="Nome" />
            </div>
            <div class="form-group mb-4">
                <label for="email" class="block text-sm font-medium">Email</label>
                <InputText id="email" v-model="profile.email" type="email" class="mt-1 block w-full"
                    placeholder="Email" />
            </div>
            <div class="form-group mb-4">
                <label for="login" class="block text-sm font-medium">Login</label>
                <InputText id="login" v-model="profile.login" type="text" class="mt-1 block w-full"
                    placeholder="Login" />
            </div>
            <div class="form-group mb-4">
                <label for="password" class="block text-sm font-medium">Senha</label>
                <InputText id="password" v-model="profile.password" type="password" class="mt-1 block w-full"
                    placeholder="Senha" />
            </div>
            <div class="form-group mb-4">
                <label for="confirmPass" class="block text-sm font-medium">Confirmar Senha</label>
                <InputText id="confirmPass" v-model="profile.confirmPass" type="password" class="mt-1 block w-full"
                    placeholder="Confirmar Senha" />
            </div>

            <Button @click="updateProfile" class="mt-3">
                Atualizar Perfil
            </Button>

        </div>
    </AppTemplate>
</template>

<script setup>
import Avatar from 'primevue/avatar';
import AppTemplate from '@/templates/AppTemplate.vue';
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

const profile = ref({
    name: "pedros",
    email: "porks@mail.com",
    login: "login",
    password: null,
    confirmPass: null
});

const updateProfile = () => {
    if (profile.value.password !== profile.value.confirmPass) {
        alert('As senhas não coincidem!');
        return;
    }
    // Lógica para atualizar o perfil do usuário
    console.log('Perfil atualizado:', profile.value);
};
</script>

<style scoped>
/* Adicione seus estilos personalizados aqui */
</style>
