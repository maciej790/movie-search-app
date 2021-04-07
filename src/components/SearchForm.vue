<template>
  <form class="search_form">
    <input
      class="input_search"
      type="text"
      placeholder="e.g. Batman"
      :value="inputValue"
      @change="(e) => $emit('update:inputValue', e.target.value)"
    />
    <button class="serch_btn" @click.prevent="$emit('handleSearchClick')">Get movies</button>
  </form>
</template>

<script>
export default {
  name: 'SearchForm',

  props: {
    inputValue: {
      type: String,
      required: true,
    },
  },

  emits: ['update:inputValue', 'handleSearchClick'],
};
</script>

<style lang="scss">
@mixin formElement($width, $bcg, $border, $top_left, $bottom_left) {
  width: $width;
  height: 40px;
  background-color: $bcg;
  text-align: center;
  outline: none;
  border: $border;
  border-top-left-radius: $top_left;
  border-bottom-right-radius: $bottom_left;
}

.search_form {
  width: 90%;
  margin-top: 150px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 684px) {
    width: 50%;
  }

  @media (min-width: 1000px) {
    width: 30%;
  }

  .input_search {
    @include formElement(70%, transparent, 3px solid rgb(21, 141, 156), 20px, 20px);
  }

  .serch_btn {
    @include formElement(60%, black, none, 0, 0);
    color: white;
    font-size: 18px;
    font-weight: bold;
    border-radius: 10px;
    transition: transform, 0.3s ease-in-out;

    @media (min-width: 1000px) {
      width: 40%;
    }
  }

  .serch_btn:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
}
</style>
