import { createRouter, createWebHistory } from "vue-router";
import WelcomeView from "../views/WelcomeView.vue";
import ChatsView from "../views/ChatsView.vue";
import MessagesView from "../views/MessagesView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: WelcomeView,
  },
  {
    path: "/chats",
    name: "chats",
    component: ChatsView,
  },
  {
    path: "/messages/:id",
    name: "messages",
    component: MessagesView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
