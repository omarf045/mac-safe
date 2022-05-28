<template>
  <div class="min-w-full min-h-full">
    <NavbarComponent />
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src

import NavbarComponent from "@/pages/NavbarComponent.vue";

export default {
  name: "ContainerView",
  components: {
    NavbarComponent,
  },
};
</script>
