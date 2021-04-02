<template>
  <form class="search_form">
    <input class="inp_skill" type="text" placeholder="e.g. Java" />
    <input class="inp_location" type="text" placeholder="location" />
    <button class="serch_btn">Show jobs</button>
  </form>
</template>

<script>
export default {
  name: 'SearchForm',
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
