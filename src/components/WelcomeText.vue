<template>
  <div class="welcomeBox">
    <h1>
      Welcome to Search Dish App
    </h1>
    <p class="appDescription">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula justo in dui euismod
      bibendum. Duis sagittis augue nisi, in dictum mi mattis eget. Duis finibus mi a ex dapibus
    </p>
  </div>
</template>

<script>
export default {
  name: 'WelcomeText',
};
</script>

<style lang="scss" scoped>
.welcomeBox {
  margin-top: 50px;
  font-weight: bold;
  width: 90%;
  text-align: center;

  .appDescription {
    line-height: 30px;
    margin-top: 30px;
    text-align: justify;
    font-size: 15px;
  }
}
</style>
