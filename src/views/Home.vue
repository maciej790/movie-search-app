<template>
  <div class="wrapper">
    <WelcomeText v-if="!renderStatement.showResults" />
    <SearchForm
      v-model:inputValue="inputValue"
      @handleSearchClick="handleSearchClick"
      v-if="!renderStatement.showResults"
    />
    <h1 v-if="renderStatement.error">Error</h1>
    <transition-group name="fade">
      <section class="item_lists" v-if="renderStatement.showResults">
        <MovieItem v-for="item in searchResults" :key="item.imdbID" :movie="item" />
      </section>
    </transition-group>
    <LoadingCircle v-if="renderStatement.loading" />
  </div>
</template>

<script>
import { computed, reactive, ref } from 'vue';
import SearchForm from '../components/SearchForm.vue';
import WelcomeText from '../components/WelcomeText.vue';
import MovieItem from '../components/MovieItem.vue';
import LoadingCircle from '../components/LoadingCircle.vue';

const BASE_URL = 'https://www.omdbapi.com/';

export default {
  components: {
    WelcomeText,
    SearchForm,
    MovieItem,
    LoadingCircle,
  },
  name: 'Home',

  setup() {
    const inputValue = ref('');
    const searchResults = ref([]);

    const renderStatement = reactive({
      loading: false,
      error: false,
      nextView: false,
      showResults: computed(
        () => renderStatement.loading === false
          && renderStatement.error === false
          && renderStatement.nextView === true,
      ),
    });

    const handleSearchClick = async () => {
      renderStatement.loading = true;
      if (inputValue.value) {
        try {
          const response = await fetch(
            `${BASE_URL}?apikey=${process.env.VUE_APP_API_KEY}&s=${inputValue.value}`,
          );

          const data = await response.json();
          console.log(data);
          searchResults.value = data.Search;
          renderStatement.error = false;
          renderStatement.nextView = true;
        } catch (err) {
          renderStatement.error = true;
          renderStatement.nextView = false;
          console.log(err);
        }
      }

      renderStatement.loading = false;
    };
    return {
      inputValue,
      handleSearchClick,
      searchResults,
      renderStatement,
    };
  },
};
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
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

    .item_lists {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 90%;
    }
  }
}
</style>
