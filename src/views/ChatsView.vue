<template>
  <div class="home">
    <div class="top-nav">
      <GreyButton title="BACK" :goBack="true" />
      <PinkButton title="HELP" />
      <GreyButton title="Messages" />
    </div>
    <div class="content">
      <h1>Chats</h1>
      <div>
        <router-link :to="{ name: 'messages', params: { id: 1 } }">
          <div class="friends grey-bg">user</div>
        </router-link>
        <router-link :to="{ name: 'messages', params: { id: 2 } }">
          <div class="friends light-grey-bg">user</div>
        </router-link>
        <router-link :to="{ name: 'messages', params: { id: 1 } }">
          <div class="friends grey-bg">user</div>
        </router-link>
        <router-link :to="{ name: 'messages', params: { id: 2 } }">
          <div class="friends light-grey-bg">user</div>
        </router-link>
      </div>
    </div>
    <div class="bottom-nav">
      <GreyButton title="Read Prev" />
      <PinkButton title="NARRATE" />
      <GreyButton title="Read Next" />
    </div>
  </div>
</template>

<script>
import GreyButton from "../components/GreyButton.vue";
import PinkButton from "../components/PinkButton.vue";

export default {
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
  name: "WelcomeView",
  components: { GreyButton, PinkButton },
};
</script>

<style>
.top-nav {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}

.bottom-nav {
  position: -webkit-sticky;
  position: sticky;
  bottom: 0;
}

.content {
  min-height: 100vh;
  /* display: flex;
  align-content: center;
  justify-content: center;
  align-items: center; */
}

.friends {
  width: 100%;
  padding: 5px 10px;
}

.grey-bg {
  background: rgb(97, 70, 70);
}

.light-grey-bg {
  background: rgb(128, 116, 116);
}
</style>
