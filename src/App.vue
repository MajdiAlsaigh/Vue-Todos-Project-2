<script setup>
import TheNavigation from "@/components/TheNavigation.vue";
</script>

<template>
  <TheNavigation />
  <RouterView />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap");

* {
  font-family: "Rubik", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  background-color: lightgray;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}
</style>
