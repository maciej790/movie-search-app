<template>
  <form>
    <input
      type="text"
      :value="inputValue"
      @change="(e) => $emit('update:inputValue', e.target.value)"
    />
    <button @click.prevent="$emit('handleClick')">Search</button>
  </form>
</template>

<script>
export default {
  name: 'Form',

  props: {
    inputValue: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
