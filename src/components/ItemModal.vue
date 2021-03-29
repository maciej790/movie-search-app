<template>
  <div class="modal">
    <p class="closeModal" @click="$emit('handleCloseModal')">❌</p>
    <p class="modal_p">Dish: {{ modalInfo.label }}</p>
    <p class="modal_p">Calories: {{ modalInfo.calories }}</p>
    <button class="recipe_btn"><a :href="modalInfo.recipe" target="blank">Recipe</a></button>
  </div>
</template>

<script>
export default {
  name: 'ItemModal',

  props: {
    modalInfo: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.modal {
  height: 400px;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 100px;
  background-color: black;
  color: white;
  padding: 0 20px 0 20px;

  .closeModal{
      font-size: 30px;
      font-weight: bold;
  }

  .modal_p {
    font-weight: bold;
    text-decoration: underline;
  }

  .recipe_btn {
    width: 50%;
    height: 40px;
    border: none;
    outline: none;
    border: 3px solid white;
    background-color: transparent;

    a {
      text-decoration: none;
      color: white;
      font-size: 20px;
    }
  }
}
</style>
