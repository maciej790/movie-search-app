<template>
  <h1>Hello</h1>
  <Form v-model:inputValue="inputValue" @handleClick="handleSearch" />
  <p v-for="x in results" :key="x.id">
    <router-link :to="{ name: 'Details', params: { id: x.id } }">
      {{ x.delivery }}
    </router-link>
  </p>
  <router-view></router-view>
</template>

<script>
import { ref } from 'vue';
import Form from '../components/Form.vue';

export default {
  name: 'App',
  components: { Form },

  setup() {
    const inputValue = ref('');
    const results = ref();

    const handleSearch = async () => {
      const response = await fetch(`https://v2.jokeapi.dev/joke/${inputValue.value}?amount=5`);
      const data = await response.json();
      console.log(data);

      results.value = data.jokes;
    };

    return {
      inputValue,
      handleSearch,
      results,
    };
  },
};
</script>
<style lang="scss">
p {
  width: 100%;
  height: 50px;
  background: rgb(0, 255, 221);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: purple;
}
</style>
