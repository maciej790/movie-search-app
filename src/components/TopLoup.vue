<template>
  <div class="loup">
    <p class="loup_icon"><i class="fas fa-search fa-2x"></i></p>
  </div>
</template>

<script>
export default {
  name: 'TopLoup',
};
</script>

<style lang="scss">
.loup {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  top: 20px;
  z-index: 100;

  .loup_icon {
    padding: 15px;
    border: 3px solid black;
    border-radius: 100px;
    background-color: rgb(21, 141, 156);
    color: white;
    transition: transform 0.5s ease-in-out;
  }
}

.loup_icon:hover {
  cursor: pointer;
  transform: rotate(360deg);
}
</style>
