<template>
  <form class="dishForm">
    <input
      type="text"
      placeholder="e.g. chcicken"
      class="formInput"
      :value="inputIngredient"
      @change="(e) => $emit('update:inputIngredient', e.target.value)"
    />
    <input
      type="number"
      placeholder="e.g. 400"
      class="formInput"
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

<style lang="scss" scoped>
@mixin formElement($width, $border, $bacgroundColor, $color, $weight) {
  width: $width;
  height: 40px;
  background-color: $bacgroundColor;
  color: $color;
  text-align: center;
  border: none;
  outline: none;
  border-bottom: $border;
  font-size: 18px;
  font-weight: $weight;
}

.dishForm {
  width: 70%;
  margin-top: 100px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .formInput {
    @include formElement(100%, 3px solid black, white, black, normal);
  }

  .searchBtn {
    @include formElement(80%, none, black, white, bold);
  }
}
</style>
