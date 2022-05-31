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