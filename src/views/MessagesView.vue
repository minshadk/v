<template>
  <div class="home container">
    <div class="top-nav">
      <!-- <GreyButton title="BACK" /> -->
      <GreyButton title="BACK" :goBack="true" />
      <PinkButton title="HELP" />
      <GreyButton title="Send" />
    </div>
    <div class="content">
      <h1>Anjana,24</h1>
      <div class="messages">
        <div v-for="message in messages" class="message" :key="message">
          {{ message.message }}
        </div>
      </div>
      <div class="send-message">
        <input class="message-input" required v-model="message" />
        <button v-on:click="sendMessage">Send</button>
      </div>
    </div>
    <div class="bottom-nav">
      <GreyButton title="Record" />
      <PinkButton title="NARRATE" />
      <GreyButton title="Read wirtten text" />
    </div>
  </div>
</template>

<script>
import GreyButton from "../components/GreyButton.vue";
import PinkButton from "../components/PinkButton.vue";

export default {
  name: "WelcomeView",
  components: { GreyButton, PinkButton },
  data() {
    return {
      message: "",
      messages: [
        { message: "Good Morning! Nice to meet you", isMe: false },
        { message: "Hey There i hope your' doing well!", isMe: true },
        { message: "Hey There i hope your' doing well!", isMe: true },
        { message: "Hey There i hope your' doing well!", isMe: true },
      ],
    };
  },
  methods: {
    sendMessage() {
      console.log("send Message function called");
      console.log(this.message);
      this.messages.push({ message: this.message, isMe: true });
      this.message = "";
    },
  },
};
</script>

<style>
.home {
  position: relative;
}

.top-nav {
  /* position: absolute;
  right: 0px;
  top: 0px; */
}

.bottom-nav {
  position: absolute;
  bottom: 0px;
  right: 0px;
}

.container {
  min-height: 10vh;
  /* display: flex;
  align-content: center;
  justify-content: center;
  align-items: center; */
}

.content {
  /* margin-top: 100px; */
  /* position: absolute;
  right: 0px;
  top: 0px; */
}

.messages {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.message {
  display: flex;
  width: 90%;
  padding: 5px;
  background: rgb(187, 138, 138);
  border: 2px solid rgb(161, 147, 147);
}

.send-message {
  display: flex;
  margin-top: 100px;
  widows: 80%;
}

.message-input {
  width: 90%;
  padding: 8px;
}
</style>
