<template>
  <div id="app">
    <Header />

    <div class="view-page">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "./components/default/Header.vue";

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
a{
  text-decoration: none;
  color: white;
  font-size: 2rem;
}
#app {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.view-page{
  margin-top: 2rem;
  margin-bottom: 4rem;
}
</style>
