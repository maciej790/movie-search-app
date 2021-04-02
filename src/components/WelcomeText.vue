<template>
  <header class="app_header">
    <h1>Github Jobs</h1>
    <p class="app_description">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam placeat minima accusamus
      delectus adipisci amet et eligendi explicabo id nemo sequi necessitatibus quis ducimus
      officia, eaque provident dicta praesentium?
    </p>
  </header>
</template>

<script>
export default {
  name: 'WelcomeText',
};
</script>

<style lang="scss">
.app_header {
  width: 90%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .app_description {
    margin-top: 20px;
    text-align: justify;
  }
}
</style>
