<template>
  <section class="results">
    <h1>results</h1>
  </section>
</template>

<script>
export default {
  name: 'DishResults',

  props: {
    results: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
