<template>
  <transition name="fade">
    <div class="arrow" v-if="state.isVisible" @click="handleDefaultView">
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
    <transition-group name="fade">
      <div class="results" v-if="state.isVisible">
        <DishResults
          v-for="item in results"
          :key="item"
          :results="item"
          @handleItemClick="handleItemClick(item)"
        />
      </div>
    </transition-group>
    <AppLoader v-if="state.loading" />
    <ItemModal
      v-if="state.showModal && state.nextView"
      :modalInfo="modalInfo"
      @handleCloseModal="handleCloseModal"
    />
    <h2 class="error" v-if="state.error && !state.loading">We have an error 😔</h2>
  </div>
</template>

<script>
import { computed, reactive, ref } from 'vue';
import SearchForm from './components/SearchForm.vue';
import WelcomeText from './components/WelcomeText.vue';
import DishResults from './components/DishResults.vue';
import AppLoader from './components/AppLoader.vue';
import ItemModal from './components/ItemModal.vue';

const BASE_URL = 'https://api.edamam.com/search?';
const APP_ID = process.env.VUE_APP_API_ID;
const APP_KEY = process.env.VUE_APP_API_KEY;

export default {
  name: 'App',
  components: {
    WelcomeText,
    SearchForm,
    DishResults,
    AppLoader,
    ItemModal,
  },

  setup() {
    const inputIngredient = ref('');
    const inputCalories = ref('');
    const results = ref();
    const modalInfo = ref({});

    // variables for service error and loadnig api
    const state = reactive({
      nextView: false,
      loading: false,
      error: false,
      showModal: false,
      // all statements for show/hide component
      isVisible: computed(() => state.nextView && !state.error && !state.loading),
    });

    const getRecipes = async () => {
      if (inputIngredient.value && inputCalories.value) {
        state.nextView = true;
        state.loading = true;
      } else {
        state.loading = false;
      }
      try {
        const response = await fetch(
          `${BASE_URL}q=${inputIngredient.value}&app_id=${APP_ID}&app_key=${APP_KEY}&calories=0-${inputCalories.value}&from=0&to=51`,
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

    const handleItemClick = (item) => {
      state.showModal = true;
      modalInfo.value = {
        label: item.label,
        calories: Math.round(item.calories),
        recipe: item.url,
      };
    };

    const handleDefaultView = () => {
      state.nextView = false;
      state.showModal = false;
    };

    const handleCloseModal = () => {
      state.showModal = false;
    };

    return {
      inputIngredient,
      inputCalories,
      getRecipes,
      results,
      state,
      handleItemClick,
      modalInfo,
      handleDefaultView,
      handleCloseModal,
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
    justify-content: center;

    .results {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr;
      gap: 50px 0px;

      @media (min-width: 601px) {
        grid-template-columns: 1fr 1fr;
        gap: 50px 20px;
      }

      @media (min-width: 901px) {
        grid-template-columns: 1fr 1fr 1fr;
        gap: 50px 50px;
      }
    }

    .error {
      color: red;
      margin-top: 30px;
    }
  }

  .bcgNone {
    background-image: none;
  }
}
</style>
