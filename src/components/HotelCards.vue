<template>
  <div style="main-container">
    <div v-for="(item, index) in data" :key="'data' + index">
      <div class="card-container" :id="`cardContainer${item.hotelID}`">
        <div class="top-side">
          <div class="image-box">
            <img
              :src="require(`@/assets/images/${item.photos[0]}`)"
              alt=""
              class="hotel-mini-image"
            />
            <div class="favorite-button" @click="addFavorite()">
              <i class="far fa-heart" ref="favoriteButton"></i>
            </div>
          </div>
          <div class="property-box">
            <div>
              <h2 class="hotel-name">{{ item.hotelName }}</h2>
            </div>

            <div class="location-rating-box">
              <div class="rating-box">
                <span
                  v-for="star in item.rating"
                  :key="'checkedStar' + star"
                  class="fa fa-star checked"
                >
                </span>
                <span
                  class="fa fa-star"
                  v-for="star in 5 - item.rating"
                  :key="'start' + star"
                >
                </span>
              </div>
              <span class="vertical"></span>
              <div class="location-box">
                <i class="fas fa-map-marker-alt"></i>
                <span class="location">{{ item.location }}</span>
              </div>
            </div>

            <div class="service-box">
              <div class="comments">
                <span @click="showServiceBox('comments', item.hotelID)"
                  >comments<i class="fas fa-comment"></i
                ></span>
              </div>
              <div class="services">
                <span @click="showServiceBox('services', item.hotelID)"
                  >services<i class="fas fa-concierge-bell"></i
                ></span>
              </div>
              <div class="photos">
                <span @click="showServiceBox('photos', item.hotelID)"
                  >photos <i class="fas fa-image"></i
                ></span>
              </div>
            </div>
          </div>
          <div class="price-box">
            
              <!-- <button @click="goToSelfPage(item.hotelID)"> GOOO</button> -->

              <router-link :to="`/hotel/${item.hotelID}`"> Gooo</router-link>
            
          </div>
        </div>
        <div class="bottom-side" :id="`bottomSide${item.hotelID}`">
          <div class="bottom-tags" ref="bottomContent">
            <div
              :class="['bottom-tag', `bottom-tag${item.hotelID}`]"
              @click.prevent="changeBox($event, 'comments', item.hotelID)"
            >
              Comments
            </div>
            <div
              :class="['bottom-tag', `bottom-tag${item.hotelID}`]"
              @click.prevent="changeBox($event, 'services', item.hotelID)"
            >
              Services
            </div>
            <div
              :class="['bottom-tag', `bottom-tag${item.hotelID}`]"
              @click.prevent="changeBox($event, 'photos', item.hotelID)"
            >
              Photos
            </div>
          </div>
          <div class="bottom-content">
            <div
              :class="[
                'bottom-boxes',
                'comment-container',
                `bottom-boxes${item.hotelID}`,
              ]"
              :id="`comments${item.hotelID}`"
            >
              <div
                class="comment"
                v-for="(comment, index) in item.comments"
                :key="'comment' + index"
              >
                <span class="client"><i class="fas fa-user"></i></span>
                <span class="description">
                  <h3 class="client-name">{{ comment.name }}</h3>
                  <p class="comment-text">
                    {{ comment.description }}
                  </p>
                  <span
                    class="client-rating"
                    :class="comment.rate > 9 ? 'green' : comment.rate < 9 && comment.rate > 8 ? 'yellow' : 'red'"
                    >{{ comment.rate }}</span
                  >
                </span>
              </div>
            </div>
            <div
              :class="['bottom-boxes', `bottom-boxes${item.hotelID}`]"
              :id="`services${item.hotelID}`"
            >
              asda
            </div>
            <div
              :class="['bottom-boxes', `bottom-boxes${item.hotelID}`,'photos-container']"
              :id="`photos${item.hotelID}`">
              <span class="mini-images" v-for="(image,index) in item.photos" :key="index">
                <img :src="require(`@/assets/images/${image}`)" :alt="'image'+index" class="mini-image">
              </span>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import json from "@/assets/data/Hotels.json";
export default {
  name: "HotelCards",
  data() {
    return {
      data: json,

    };
  },
  computed:{
    hotelPage(){
      return `/hotel/${this.data[0].hotelID}`
    }
  },
 
  methods: {
    addFavorite() {
      //Favorite button color and type change
      let element = this.$refs.favoriteButton;
      let classes = element.classList;
      classes.toggle("fas");
      console.log(this.data.comments);
    },

    showServiceBox( val, id) {
      
      //Show bottom side and card container change
      let cardContainer = document.getElementById(`cardContainer${id}`);
      cardContainer.classList.toggle("activeCard");
      let bottomSide = document.getElementById(`bottomSide${id}`);
      bottomSide.classList.toggle("active");

      let bottomBoxes = document.getElementsByClassName("bottom-boxes");
      for (let index = 0; index < bottomBoxes.length; index++) {
        bottomBoxes[index].style.display = "none";
      }
      let bottomTagId = document.getElementsByClassName(`bottom-tag${id}`);
      /* let bottomTagId = document.getElementsByClassName("bottom-tag"); */
      for (let index = 0; index < bottomTagId.length; index++) {
        bottomTagId[index].className = bottomTagId[index].className.replace(
          "selected",
          ""
        );
        if (val == "services") {
          bottomTagId[1].classList.add("selected");
        } else if (val == "comments") {
          bottomTagId[0].classList.add("selected");
        } else if (val == "photos") {
          bottomTagId[2].classList.add("selected");
        }
      }

      document.getElementById(val + id).style.display = "flex";
      
    },

    changeBox(event, val, id) {
      let crntTarget = event.currentTarget;
      let bottomBoxes = document.getElementsByClassName(`bottom-boxes${id}`);

      for (let index = 0; index < bottomBoxes.length; index++) {
        bottomBoxes[index].style.display = "none";
      }
      let bottomTag = document.getElementsByClassName(`bottom-tag${id}`);
      for (let index = 0; index < bottomTag.length; index++) {
        bottomTag[index].className = bottomTag[index].className.replace(
          "selected",
          ""
        );
      }
      document.getElementById(val + id).style.display = "flex";
      crntTarget.className += " selected";
    },
    /* goToSelfPage(id){
      let hotelData = this.data
      this.$router.push({ name:"HotelPage", params:{id:id}, props:{data:hotelData}}) 
    } */
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
  flex-direction: column;
  justify-content: space-between;
  transition: 0.4s ease-in-out;
  margin-bottom: 2rem;
}
.activeCard {
  height: 600px;
}
.top-side {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.bottom-side {
  width: 100%;
  height: 0px;
  display: none;
  border-radius: 15px;
  flex-direction: column;
  justify-content: space-between;
}
.bottom-tags {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-color: #cfd8dc;
}

.bottom-tag {
  width: 33%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  transition: all 0.4s ease;
  color: #616161;
  border-bottom: 3px solid transparent;
}
.bottom-tag:hover {
  color: #03a9f4;
}
.bottom-boxes {
  width: 100%;
  height: 220px;
  background-color: #cfd8dc;
  display: none;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}
.selected {
  color: #03a9f4;
  border-bottom: 3px solid #03a9f4;
}

.active {
  opacity: 1;
  display: flex;
  padding-top: 1rem;
  height: 100%;
  transition: all 0.4s ease-in-out;
}
.checked {
  color: orange;
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
  transition: 0.7s ease;
}
.hotel-mini-image:hover {
  transform: scale(1.15);
}
.favorite-button {
  position: absolute;
  z-index: 999;
  top: 10px;
  left: 10px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  transition: 0.3s ease;
  font-size: 1.2rem;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.59);
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
  justify-content: flex-start;
}
.location-rating-box {
  display: flex;
  margin: 1rem 0;
  width: 500px;
  align-items: center;
  height: 40px;
}
.vertical {
  width: 5px;
  height: 20px;
  background-color: #bdbdbd;
  border-radius: 10px;
  margin: 0 1rem;
}
.location {
  font-family: "Poppins", sans-serif;
  margin-left: 0.5rem;
  color: #616161;
}
.fa-map-marker-alt {
  color: #616161;
  font-size: 17px;
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
.service-box {
  width: 500px;
  display: flex;
  height: 130px;
  align-items: flex-end;
  justify-content: flex-start;
}
.service-box span {
  display: flex;
  align-items: center;
  width: 120px;
  height: 50px;
  background-color: #cfd8dc;
  padding: 0.3rem;
  justify-content: space-between;
  flex-direction: column;
  border-radius: 10px;
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  color: #757575;
  margin-right: 1rem;
  cursor: pointer;
  transition: 0.4s ease;
  border: 2px solid transparent;
  text-transform: capitalize;
}
.service-box span:hover {
  border: 2px solid #1e88e5;
  color: #03a9f4;
}
.comment-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
}
.comment {
  display: flex;
  width: 48%;
  height: 85px;
  background-color: white;
  border-radius: 15px;
}
.client {
  width: 85px;
  height: 85px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #455a64;
  background-color: #90a4ae;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
}
.description {
  display: flex;
  flex-direction: column;
  width: calc(100% - 85px);
  padding: 0.3rem;
  position: relative;
  overflow: hidden;
}
.client-name {
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  margin-left: 0.5rem;
  color: #616161;
}
.client-rating {
  position: absolute;
  width: 80px;
  height: 20px;
  background-color: green;
  top: 5px;
  right: -26px;
  display: flex;
  justify-content: center;
  transform: rotate(45deg);
  align-items: center;
  color: white;
  font-family: "Poppins", sans-serif;
}
.comment-text {
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  margin-left: 0.5rem;
}
.green {
  background-color: green;
}
.red {
  background-color: red;
}
.yellow {
  background-color: orange;
}
.photos-container{
  display: flex;
  justify-content: space-around;
  align-items: center;
  height:220px;
  padding: 1rem;
  width: 100%;
}
.mini-images{
  width: 185px;
  height: 150px;
  background-color: green;
  border-radius:15px ;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  
}
.mini-image{
  max-height: 100%;
  transform: scale(1);
  transition: 0.3s ease;
}
.mini-image:hover{
  transform: scale(1.25);
}
</style>