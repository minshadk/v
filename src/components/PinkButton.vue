<template>
  <button class="button">{{ title }}</button>
</template>

<script>
export default {
  props: ["title"],
  data() {},
};
</script>

<style scoped>
.button {
  width: 150px;
  border-radius: 20px;
  background: rgb(209, 104, 211);
  text-align: center;
  padding: 100px 0;
  border: 1px solid #333;
}
</style>
