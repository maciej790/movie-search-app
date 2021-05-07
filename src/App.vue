<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss">
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
}
</style>
