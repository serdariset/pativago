<template>
  <div class="card-container">
    <div class="image-box">
      <img
        :src="require(`@/assets/images/img1.jpg`)"
        alt=""
        class="hotel-mini-image"
      />
      <div class="favorite-button" @click="addFavorite()">
        <i class="far fa-heart" ref="favoriteButton"></i>
      </div>
    </div>
    <div class="property-box">
      <div><h2 class="hotel-name">Royal Hotel</h2></div>
      <div><span>rating</span></div>
      <div><i class="fas fa-map-marker-alt"></i></div>
      <div class="comment-box">aa</div>
    </div>
    <div class="price-box">
      <button>Go</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HotelCards",
  methods: {
    addFavorite() {
      //Favorite button color and type change
      let element = this.$refs.favoriteButton;
      let classes = element.classList;
      classes.toggle("fas");
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap");
.card-container {
  width: 1180px;
  height: 300px;
  border-radius: 15px;
  background-color: #e0e0e0be;
  box-shadow: 1px 2px 14px -1px rgba(0, 0, 0, 0.59);
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.image-box {
  width: calc(300px - 2rem);
  height: calc(300px - 2rem);
  border-radius: 15px;
  overflow: hidden;
  position: relative;
}
.hotel-mini-image {
  max-height: 100%;
  transform: scale(1);
  transition: 0.4s ease;
}
.hotel-mini-image:hover {
  transform: scale(1.15);
}
.favorite-button {
  position: absolute;
  z-index: 999;
  top: 15px;
  left: 15px;
  cursor: pointer;
  color: #455a64;
  transition: 0.3s ease;
  font-size: 1.2rem;
}
.favorite-button:hover {
  color: red;
}
.fas.fa-heart {
  color: red;
}
.property-box {
  width: 500px;
  height: calc(300px - 2rem);
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.hotel-name {
  font-family: "Poppins", sans-serif;
  color: #616161;
}
.price-box {
  width: 300px;
  height: calc(300px - 2rem);
  background-color: turquoise;
}
</style>