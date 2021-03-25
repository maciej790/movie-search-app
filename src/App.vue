<template>
  <div class="wrapper">
    <WelcomeText />
    <SearchForm
      v-model:inputIngredient="inputIngredient"
      v-model:inputCalories="inputCalories"
      @handleClick="getRecipes"
    />
    <p v-for="recipe in results" :key="recipe">{{recipe}}</p>
  </div>
</template>

<script>
import { ref } from 'vue';
import SearchForm from './components/SearchForm.vue';
import WelcomeText from './components/WelcomeText.vue';

const BASE_URL = 'https://api.edamam.com/search?';
const APP_ID = process.env.VUE_APP_API_ID;
const APP_KEY = process.env.VUE_APP_API_KEY;

export default {
  name: 'App',
  components: { WelcomeText, SearchForm },

  setup() {
    const inputIngredient = ref('');
    const inputCalories = ref('');
    const results = ref();

    const getRecipes = async () => {
      const response = await fetch(
        `${BASE_URL}q=${inputIngredient.value}&app_id=${APP_ID}&app_key=${APP_KEY}&calories=0-${inputCalories.value}&from=0&to=3`,
      );

      const data = await response.json();
      results.value = data.hits.map((item) => item.recipe);
      console.log(results.value);
    };

    return {
      inputIngredient,
      inputCalories,
      getRecipes,
      results,
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
