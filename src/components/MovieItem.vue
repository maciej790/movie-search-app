<template>
  <div class="item">
    <div class="poster" :style="style"></div>
    {{ movie.Title }}
  </div>
</template>

<script>
import { computed, ref } from 'vue';

export default {
  name: 'MovieItem',

  props: {
    movie: {
      type: Object,
      required: true,
    },
  },

  setup(props) {
    const posterImg = ref(props.movie.Poster);
    const style = ref(computed(() => `background-image: url("${posterImg.value}")`));

    return {
      posterImg,
      style,
    };
  },
};
</script>

<style lang="scss">
.item {
  width: 90%;
  height: 400px;
  background-color: orange;
  margin: 40px;

  .poster {
    width: 100%;
    height: 200px;
    background-repeat: no-repeat;
  }
}
</style>
