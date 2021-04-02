<template>
  <form class="search_form">
    <input
      class="inp_skill"
      type="text"
      placeholder="e.g. Java"
      :value="inputSkill"
      @change="(e) => $emit('update:inputSkill', e.target.value)"
    />
    <input
      class="inp_location"
      type="text"
      placeholder="location"
      :value="inputLocation"
      @change="(e) => $emit('update:inputLocation', e.target.value)"
    />
    <button class="serch_btn" @click.prevent="$emit('handleSearchClick')">Show jobs</button>
  </form>
</template>

<script>
export default {
  name: 'SearchForm',

  props: {
    inputSkill: {
      type: String,
      required: true,
    },

    inputLocation: {
      type: String,
      required: true,
    },
  },

  emits: ['update:inputSkill', 'update:inputLocation', 'handleSearchClick'],
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
  margin-top: 100px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .inp_skill {
    @include formElement(70%, transparent, 3px solid rgb(21, 141, 156), 20px, 20px);
  }

  .inp_location {
    @include formElement(70%, transparent, 3px solid rgb(43, 177, 103), 20px, 20px);
  }

  .serch_btn {
    @include formElement(60%, black, none, 0, 0);
    color: white;
    font-size: 18px;
    font-weight: bold;
    border-radius: 10px;
  }
}
</style>
