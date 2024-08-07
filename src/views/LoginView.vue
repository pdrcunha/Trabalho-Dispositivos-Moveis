<template>
  <main class="w-screen h-screen flex items-center justify-center bg-surface-800">
    <Card class="m-4">
      <template #title>Login</template>
      <template #content>
          <InputText type="text" placeholder="Email" v-model="postAuth.email" class="w-full mt-4" />
          <Password toggleMask placeholder="Senha" v-model="postAuth.password" :feedback="false" class="w-full mt-4" />
          <p class="text-red-600"> {{ messageErro }}</p>
          <Button label="Entrar" class="mt-4 w-full" @click="tryLogin"/>
      </template>
    </Card>
  </main>
</template>

<script setup>

import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Button from 'primevue/button';
import Card from 'primevue/card';
import { onMounted, reactive, ref } from 'vue';
import { useProfileStore } from '@/stores/useProfileStore';
import router from '@/router';
import axios from 'axios';


const userInfraStore = useProfileStore();
const messageErro = ref(null);
const postAuth = reactive({
  email: null,
  password: null
});


onMounted(()=>{
    document.title = 'Login';
    if(userInfraStore.token != null) router.push({ name: 'caixa' });
});

const tryLogin = async () => {
    try {
      const response = await axios.post(import.meta.env.VITE_BASE_URL + 'auth/login', postAuth);
      if(response.status == 200){
        userInfraStore.setToken(response.data.token);
        router.push({ name: 'caixa' });
      }
    } catch (error) {
      messageErro.value = "Erro ao autenticar";
      return false
    }
  }

</script>
