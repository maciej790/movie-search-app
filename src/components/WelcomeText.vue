<template>
  <header class="app_header">
    <h1>Your movies app</h1>
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

  @media (min-width: 684px) {
    width: 50%;
  }

  @media (min-width: 1000px) {
    width: 30%;
  }

  .app_description {
    margin-top: 20px;
    text-align: justify;
  }
}
</style>
