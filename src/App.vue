<template>
  <transition name="fade">
    <div
      class="arrow"
      v-if="state.nextView && !state.error && !state.loading"
      @click="state.nextView = !state.nextView"
    >
      🡻
    </div>
  </transition>
  <div class="wrapper" :class="{ bcgNone: state.nextView }">
    <WelcomeText v-if="!state.nextView" />
    <SearchForm
      v-if="!state.nextView"
      v-model:inputIngredient="inputIngredient"
      v-model:inputCalories="inputCalories"
      @handleClick="getRecipes"
    />
    <DishResults v-if="state.nextView && !state.error && !state.loading" :results="results" />
    <h2 v-if="state.loading">Loading...</h2>
    <h2 v-if="state.error && !state.loading">We have an error :(</h2>
  </div>
</template>

<script>
import { reactive, ref } from 'vue';
import SearchForm from './components/SearchForm.vue';
import WelcomeText from './components/WelcomeText.vue';
import DishResults from './components/DishResults.vue';

const BASE_URL = 'https://api.edamam.com/search?';
const APP_ID = process.env.VUE_APP_API_ID;
const APP_KEY = process.env.VUE_APP_API_KEY;

export default {
  name: 'App',
  components: { WelcomeText, SearchForm, DishResults },

  setup() {
    const inputIngredient = ref('');
    const inputCalories = ref('');
    const results = ref();

    // variables for service error and loadnig api
    const state = reactive({
      nextView: false,
      loading: false,
      error: false,
    });

    const getRecipes = async () => {
      state.loading = true;
      if (inputIngredient.value && inputCalories.value) {
        state.nextView = true;
      }
      try {
        const response = await fetch(
          `${BASE_URL}q=${inputIngredient.value}&app_id=${APP_ID}&app_key=${APP_KEY}&calories=0-${inputCalories.value}&from=0&to=3`,
        );

        const data = await response.json();
        results.value = data.hits.map((item) => item.recipe);
        console.log(results.value);
        state.error = false;
        inputIngredient.value = '';
        inputCalories.value = '';
      } catch (err) {
        console.log(err);
        state.error = true;
        state.nextView = false;
      }

      state.loading = false;
    };

    return {
      inputIngredient,
      inputCalories,
      getRecipes,
      results,
      state,
    };
  },
};
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Roboto Mono', monospace;

  .arrow {
    width: 100%;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    font-size: 50px;
  }

  .wrapper {
    width: 100%;
    min-height: 100vh;
    background-image: url('./assets/bacground.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .bcgNone {
    background-image: none;
  }
}
</style>
