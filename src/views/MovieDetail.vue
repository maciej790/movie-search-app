<template>
  <LoadingCircle v-if="loading" />
  <router-link to="/">
    <TopLoup />
  </router-link>

  <section class="movie_detail">
    <div class="detail_img">
      <img :src="searchResults.Poster" />
    </div>

    <div class="movie_description">
      <h2 class="detail_title">{{ searchResults.Title }}</h2>
      <p class="detail_genre">
        {{ searchResults.Genre }}
      </p>

      <p class="detial_plot">
        {{ searchResults.Plot }}
      </p>

      <p class="detail_actors">
        {{ searchResults.Actors }}
      </p>
    </div>
  </section>
</template>

<script>
import { onMounted } from 'vue';
import LoadingCircle from '../components/LoadingCircle.vue';
import TopLoup from '../components/TopLoup.vue';
import useFetch from '../use/useFetch';

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
    const {
      searchResults, status, loading, getData,
    } = useFetch();

    onMounted(async () => {
      const query = `${process.env.VUE_APP_BASE_URL}?apikey=${process.env.VUE_APP_API_KEY}&i=${props.movie_id}`;
      getData(query);
    });

    return {
      searchResults,
      status,
      loading,
      getData,
    };
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

  .movie_save {
    margin-top: 20px;
    color: rgb(255, 21, 21);
    padding: 10px;
    border: 2px solid white;
    border-radius: 100px;
    transition: transform 0.3s ease-in-out;
  }

  .movie_save:hover {
    cursor: pointer;
    transform: scale(0.8);
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
