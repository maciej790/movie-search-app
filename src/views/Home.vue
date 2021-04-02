<template>
  <div class="wrapper">
    <WelcomeText />
    <SearchForm
      v-model:inputSkill="inputSkill"
      v-model:inputLocation="inputLocation"
      @handleSearchClick="handleSearchClick"
    />
  </div>
</template>

<script>
import { ref } from 'vue';
import SearchForm from '../components/SearchForm.vue';
import WelcomeText from '../components/WelcomeText.vue';

export default {
  components: { WelcomeText, SearchForm },
  name: 'Home',

  setup() {
    const inputSkill = ref('');
    const inputLocation = ref('');

    const handleSearchClick = () => {
      console.log(inputSkill.value, inputLocation.value);
    };
    return {
      inputSkill,
      inputLocation,
      handleSearchClick,
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
  font-family: 'Varela Round', sans-serif;

  .wrapper {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
