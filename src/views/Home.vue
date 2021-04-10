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

      inputValue.value = '';
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
  background: rgb(55, 48, 179);
  background: linear-gradient(
    90deg,
    rgba(55, 48, 179, 1) 0%,
    rgba(38, 38, 179, 1) 35%,
    rgba(25, 62, 72, 1) 100%
  );
  color: white;

  .wrapper {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .error {
      position: absolute;
      top: 0;
      text-align: center;
      margin-top: 250px;
      font-weight: bold;
      font-size: 30px;
      color: red;
    }

    .item_lists {
      width: 90%;
      margin-top: 100px;
      text-align: center;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
      gap: 80px;

      @media (min-width: 1000px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
      }

      @media (min-width: 1200px) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
      }
    }
  }
}
</style>
