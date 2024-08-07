<template>
    <BaseModal header="Cadastar Usuário"  :visible="userInfraStore.visibleCreateUser"  :closeFn="() => userInfraStore.closeModal('create')">
        <form class="space-y-4 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-4">
            <InputBase for="name" name="Nome">
                <InputText id="name" v-model="form.name" type="text" class="mt-1 block w-full" placeholder="Nome" />
            </InputBase>
            <InputBase for="email" name="Email">
                <InputText id="email" v-model="form.email" type="email" class="mt-1 block w-full" placeholder="Email" />
            </InputBase>
            <InputBase for="telefone" name="Telefone">
                <InputText id="telefone" v-model="form.telefone" type="text" class="mt-1 block w-full"
                    placeholder="Telefone" />
            </InputBase>
            <InputBase for="endereco" name="Endereço">
                <InputText id="endereco" v-model="form.endereco" type="text" class="mt-1 block w-full"
                    placeholder="Endereço" />
            </InputBase>
            <InputBase for="status" name="Status">
                <Dropdown id="status" v-model="form.status" :options="statusOptions" optionLabel="label"
                    optionValue="value" class="mt-1 block w-full" placeholder="Status" />
            </InputBase>
            <div class="col-span-2 flex justify-end">
                <Button label="Cadastrar" @click="handleSubmit"/>
            </div>
        </form>
    </BaseModal>
</template>

<script setup>
import { ref } from 'vue';
import BaseModal from '@/components/BaseModal.vue';
import InputText from 'primevue/inputtext';
import { UserInfraStore } from '@/stores/UserInfraStore';
import Button from 'primevue/button';
import InputBase from '@/components/InputBase.vue';
import Dropdown from 'primevue/dropdown';

const userInfraStore = UserInfraStore()
const form = ref({
    name: '',
    email: '',
    telefone: '',
    endereco: '',
    status: ''
});
const statusOptions = ref([
    { label: 'Ativo', value: true },
    { label: 'Inativo', value: false }
]);

const handleSubmit = async () => {
    const result = await userInfraStore.postUser(form.value);
    const users = await userInfraStore.getAllUsers();
    userInfraStore.allUsers = users;
    userInfraStore.visibleCreateUser = false;
};


</script>
