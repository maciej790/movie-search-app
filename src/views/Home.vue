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
        <MovieItem v-for="item in searchResults.Search" :key="item.imdbID" :movie="item" />
      </section>
    </transition-group>
    <LoadingCircle v-if="loading" />
  </div>
</template>

<script>
import { ref } from 'vue';
import SearchForm from '../components/SearchForm.vue';
import WelcomeText from '../components/WelcomeText.vue';
import MovieItem from '../components/MovieItem.vue';
import LoadingCircle from '../components/LoadingCircle.vue';
import TopLoup from '../components/TopLoup.vue';
import useFetch from '../use/useFetch';

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
    const {
      searchResults, status, loading, getData,
    } = useFetch();

    const handleSearchClick = async () => {
      const query = `${process.env.VUE_APP_BASE_URL}?apikey=${process.env.VUE_APP_API_KEY}&s=${inputValue.value}`;
      if (inputValue.value) {
        getData(query);
      }
    };

    return {
      inputValue,
      status,
      loading,
      getData,
      handleSearchClick,
      searchResults,
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
</style>
