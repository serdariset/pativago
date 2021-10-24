<template>
  <div class="header-container">
    <div class="header">
      <router-link to="/" class="logo-link">
        <span>P</span>
        <span>A</span>
        <span>T</span>
        <span>I</span>
        <span>V</span>
        <span>A</span>
        <span>G</span>
        <span>0</span>
      </router-link>

      <div class="user"><i class="fas fa-user"></i></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Titan+One&display=swap");
.header-container {
  width: 100%;
  height: 90px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 5px 10px -1px rgba(0, 0, 0, 0.43);
}
.header {
  width: 1200px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo-link {
  text-decoration: none;
  font-size: 35px;
  text-transform: uppercase;
  font-family: "Titan One", cursive;
  letter-spacing: 1.5px;
  transition: 0.5s ease-in-out;
}
.logo-link:hover{
    letter-spacing: 5px;
}
.logo-link span:nth-child(1),
.logo-link span:nth-child(2),
.logo-link span:nth-child(3) {
  color: #03a9f4;
}

.logo-link span:nth-child(4),
.logo-link span:nth-child(5),
.logo-link span:nth-child(6) {
  color: #fb8c00;
}
.logo-link span:nth-child(7),
.logo-link span:nth-child(8) {
  color: #ef5350;
}
.user {
  font-family: "Font Awesome 5 Free";
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e0e0e0;
  color: #607d8b;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s ease;
}

.user:hover {
  
  color: #4caf50;
}
</style>