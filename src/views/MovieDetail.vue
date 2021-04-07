<template>
  <LoadingCircle v-if="!detailInfo" />
  <router-link to="/">
    <TopLoup />
  </router-link>
  <h1>Detail</h1>
</template>

<script>
import { onMounted, ref } from 'vue';
import LoadingCircle from '../components/LoadingCircle.vue';
import TopLoup from '../components/TopLoup.vue';

const BASE_URL = 'https://www.omdbapi.com/';

export default {
  components: { LoadingCircle, TopLoup },
  name: 'MovieDetail',

  props: {
    movie_id: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    const detailInfo = ref('');

    onMounted(async () => {
      try {
        const response = await fetch(
          `${BASE_URL}?apikey=${process.env.VUE_APP_API_KEY}&i=${props.movie_id}`,
        );

        console.log(response);

        const data = await response.json();
        console.log(data);

        detailInfo.value = data;
      } catch (err) {
        console.log(err);
      }
    });

    return { detailInfo };
  },
};
</script>

<style></style>
