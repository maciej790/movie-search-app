<template>
  <LoadingCircle v-if="!detailInfo" />
  <router-link to="/">
    <TopLoup />
  </router-link>

  <section class="movie_detail">
    <div class="detail_img">
      <img :src="detailInfo.Poster" />
    </div>

    <div class="movie_description">
      <h2 class="detail_title">{{ detailInfo.Title }}</h2>
      <p class="detail_genre">
        {{ detailInfo.Genre }}
      </p>

      <p class="detial_plot">
        {{ detailInfo.Plot }}
      </p>

      <p class="detail_actors">
        {{ detailInfo.Actors }}
      </p>
    </div>
  </section>
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

        const data = await response.json();

        detailInfo.value = data;
        console.log(detailInfo.value);
      } catch (err) {
        console.log(err);
      }
    });

    return { detailInfo };
  },
};
</script>

<style lang="scss">
.movie_detail {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgb(55, 48, 179);
  background: linear-gradient(
    90deg,
    rgba(55, 48, 179, 1) 0%,
    rgba(38, 38, 179, 1) 35%,
    rgba(25, 62, 72, 1) 100%
  );

  .detail_img {
    width: 90%;
    margin-top: 50px;
    text-align: center;
  }

  .movie_description {
    width: 100%;
    height: 400px;
    text-align: center;
    margin-top: 50px;
    padding: 0 20px 0 20px;

    @media (min-width: 1000px) {
      width: 50%;
    }
    .detail_title {
      text-align: center;
      text-decoration: underline;
    }

    .detail_genre {
      margin-top: 20px;
      text-align: center;
      color: rgb(12, 192, 72);
      font-weight: bold;
    }

    .detial_plot {
      margin-top: 50px;
      line-height: 30px;
    }

    .detail_actors {
      margin-top: 50px;
      text-align: center;
      color: rgb(18, 204, 236);
    }
  }
}
</style>
