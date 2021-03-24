<template>
  <div class="wrapper">
    <WelcomeText />
    <SearchForm
      v-model:inputIngredient="inputIngredient"
      v-model:inputCalories="inputCalories"
      @handleClick="getRecipes"
    />
  </div>
</template>

<script>
import { ref } from 'vue';
import SearchForm from './components/SearchForm.vue';
import WelcomeText from './components/WelcomeText.vue';

export default {
  name: 'App',
  components: { WelcomeText, SearchForm },

  setup() {
    const inputIngredient = ref('');
    const inputCalories = ref('');

    const getRecipes = () => {
      console.log(inputCalories.value, inputIngredient.value);
    };

    return {
      inputIngredient,
      inputCalories,
      getRecipes,
    };
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Roboto Mono', monospace;
  .wrapper {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
