<template>
  <h1>{{ id }}</h1>
</template>

<script>
import { onMounted, ref } from 'vue';

export default {
  name: 'Details',

  props: {
    id: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    const detailCard = ref();

    onMounted(async () => {
      const response = await fetch(`https://v2.jokeapi.dev/joke/Any?id=${props.id}`);
      const data = await response.json();

      console.log(data);
      console.log(`fetching id jokes is:${props.id}`);
      console.log(response);
    });

    return {
      detailCard,
    };
  },
};
</script>

<style></style>
