<template>
  <div class="circle_box">
    <p class="icon">🎬</p>
  </div>
</template>

<script>
export default {
  name: 'LoadingCircle',
};
</script>

<style lang="scss">
.circle_box {
  position: absolute;
  width: 100%;
  min-height: 100vh;
  background-color: rgba(68, 68, 68, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;

  .icon {
    width: 150px;
    height: 150px;
    border: 3px solid black;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(21, 141, 156);
    -webkit-animation: rotate-center 0.6s ease-in-out infinite both;
    animation: rotate-center 0.6s ease-in-out infinite both;
    font-size: 60px;
  }
}

@-webkit-keyframes rotate-center {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes rotate-center {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
