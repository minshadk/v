<template>
  <div class="home">
    <div class="top-nav">
      <GreyButton title="EXIT" />
      <PinkButton title="HELP" />
      <GreyButton title="Settings" />
    </div>
    <div class="content">
      <h1>Welcome !</h1>
    </div>
    <div class="bottom-nav">
      <GreyButton title="Voice Commands on/off" />
      <PinkButton title="NARRATE" />
      <router-link :to="{ name: 'chats' }">
        <GreyButton title="LET'S GO!" />
      </router-link>
    </div>
  </div>
</template>

<script>
import GreyButton from "../components/GreyButton.vue";
import PinkButton from "../components/PinkButton.vue";

export default {
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
</style>
