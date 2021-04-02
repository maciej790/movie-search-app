<template>
  <div class="wrapper">
    <WelcomeText />
    <SearchForm />
  </div>
</template>

<script>
import SearchForm from '../components/SearchForm.vue';
import WelcomeText from '../components/WelcomeText.vue';

export default {
  components: { WelcomeText, SearchForm },
  name: 'Home',
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
