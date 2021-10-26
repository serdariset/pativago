<template>
  <div id="app">
    <Header />

    <div class="view-page">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ul,li{
  list-style: none;
}
#app {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.view-page{
  margin-top: 2rem;
}
</style>
