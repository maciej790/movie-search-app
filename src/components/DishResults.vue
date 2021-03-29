<template>
  <img :src="results.image" />
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

<style lang="scss" scoped>
img {
  width: 300px;
  height: 300px;
}
</style>
