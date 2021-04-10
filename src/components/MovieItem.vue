<template>
  <router-link :to="{ name: 'MovieDetail', params: { movie_id: movie.imdbID } }">
    <div class="poster">
      <img class="poster_img" :src="movie.Poster" :alt="movie.Title" />
    </div>
  </router-link>
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
.poster {
  height: auto;
  background-repeat: no-repeat;
  transition: transform 0.3s ease-in-out;

  .poster_img {
    width: 250px;
    border: 8px solid rgb(21, 141, 156);
    border-radius: 30px;
    color: white;
  }
}

.poster:hover {
  cursor: pointer;
  transform: scale(0.8);
}
</style>
