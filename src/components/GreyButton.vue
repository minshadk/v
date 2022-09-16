<template>
  <button class="button" v-if="goBack" @click="back">{{ title }}</button>
  <button class="button" v-else>{{ title }}</button>
</template>

<script>
export default {
  props: ["title", "goBack"],
  data() {},
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.button {
  width: 100px;
  border-radius: 20px;
  background: rgb(153, 23, 153);
  text-align: center;
  padding: 100px 0;
  border: 1px solid #333;
}
</style>
