<template>
  <img :src="results.image" @click="$emit('handleItemClick')" />
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

  emits: ['handleItemClick'],
};
</script>

<style lang="scss" scoped>
img {
  width: 300px;
  height: 300px;
  transition: transform 0.3s ease-in-out;
}

img:hover {
  cursor: pointer;
  transform: scale(0.8);
}
</style>
