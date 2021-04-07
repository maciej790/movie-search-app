<template>
  <TopLoup v-if="status !== 'start'" @click="status = 'start'" />
  <div class="wrapper">
    <WelcomeText v-if="status === 'start'" />
    <SearchForm
      v-model:inputValue="inputValue"
      @handleSearchClick="handleSearchClick"
      v-if="status === 'start'"
    />
    <p class="error" v-if="status === 'error'">
      We have an error or have not any results :(
    </p>
    <transition-group name="fade">
      <section class="item_lists" v-if="status === 'next'">
        <MovieItem v-for="item in searchResults" :key="item.imdbID" :movie="item" />
      </section>
    </transition-group>
    <LoadingCircle v-if="loading" />
  </div>
</template>

<script>
import { reactive, ref, toRefs } from 'vue';
import SearchForm from '../components/SearchForm.vue';
import WelcomeText from '../components/WelcomeText.vue';
import MovieItem from '../components/MovieItem.vue';
import LoadingCircle from '../components/LoadingCircle.vue';
import TopLoup from '../components/TopLoup.vue';

const BASE_URL = 'https://www.omdbapi.com/';

export default {
  components: {
    WelcomeText,
    SearchForm,
    MovieItem,
    LoadingCircle,
    TopLoup,
  },
  name: 'Home',

  setup() {
    const inputValue = ref('');
    const searchResults = ref([]);

    const renderStatement = reactive({
      loading: false,
      status: 'start',
    });

    const handleSearchClick = async () => {
      renderStatement.loading = true;
      if (inputValue.value) {
        try {
          const response = await fetch(
            `${BASE_URL}?apikey=${process.env.VUE_APP_API_KEY}&s=${inputValue.value}`,
          );

          const data = await response.json();
          searchResults.value = data.Search;
          if (searchResults.value) {
            renderStatement.status = 'next';
          } else {
            renderStatement.status = 'error';
          }
        } catch (err) {
          console.log(err);
          renderStatement.status = 'error';
        }
      }

      renderStatement.loading = false;
    };
    return {
      inputValue,
      handleSearchClick,
      searchResults,
      ...toRefs(renderStatement),
    };
  },
};
</script>

<style lang="scss">
.fade-enter-active {
  transition: opacity 3s;
}
.fade-leave-active {
  transition: opacity 0.5s;
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
  font-family: 'Varela Round', sans-serif;

  .wrapper {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    .error {
      text-align: center;
      margin-top: 250px;
      font-weight: bold;
      font-size: 30px;
      color: red;
    }

    .item_lists {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 90%;

      @media (min-width: 1000px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 0px 0px;
      }

      @media (min-width: 1200px) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        gap: 0px 0px;
      }
    }
  }
}
</style>
