<template>
  <form class="dishForm">
    <input
      type="text"
      placeholder="e.g. chcicken"
      :value="inputIngredient"
      @change="(e) => $emit('update:inputIngredient', e.target.value)"
    />
    <input
      type="number"
      placeholder="e.g. 400"
      :value="inputCalories"
      @change="(e) => $emit('update:inputCalories', e.target.value)"
    />
    <button class="searchBtn" @click.prevent="$emit('handleClick')">Search</button>
  </form>
</template>

<script>
export default {
  name: 'SearchForm',

  props: {
    inputIngredient: {
      type: String,
      required: true,
    },

    inputCalories: {
      type: String,
      required: true,
    },
  },

  emits: ['update:inputIngredient', 'update:inputCalories', 'handleClick'],
};
</script>

<style lang="scss">
.dishForm {
  margin-top: 100px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
