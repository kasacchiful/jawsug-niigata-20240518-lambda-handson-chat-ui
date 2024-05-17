<script setup lang="ts">
const message = ref('');
const response = ref('');
const ask = async () => {
  response.value = '';
  const config = useRuntimeConfig()
  const res = await $fetch(config.public.API_ENDPOINT, {
    method: 'POST',
    body: { message: message.value }
  });
  console.log(res);
  response.value = res.output_text;
}
</script>

<template>
  <div>
    <textarea v-model="message" cols="50" rows="5" style="display: block;margin-bottom: 5px"></textarea>
    <button @click="ask">送信</button>
    <div style="margin-top: 5px">{{ response }}</div>
  </div>
</template>

