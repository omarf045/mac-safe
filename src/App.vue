<!--<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>-->

<template>
  <div class="min-w-full">
    <ContainerView />
  </div>
</template>

<script>
import ContainerView from "./views/ContainerView.vue";

export default {
  name: "App",
  components: {
    ContainerView,
  },
};
</script>