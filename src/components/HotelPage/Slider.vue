<template>
  <div>
      <div class="slider-container"
             >
        <ul class="slider-list" >
          <li
            class="slider"
            v-for="(photo, index) in photos"
            :key="index"
            
          >
            <div class="bottom-images" :class="index == visibleSmallSlide ? 'activeSmallImage' : ''"  >
              <img
              :src="require(`@/assets/images/${photo}`)"
              class="bottom-img"
               @mouseover="startSlide(index)"
            />
              
            </div>
            <div  v-show="visibleSlide == index" class="top-image" >
              <img
              :src="require(`@/assets/images/${photo}`)"
              class="main-image"
            />
              
            </div>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>

export default {
    name: 'Slider',
    props:{
        photos: Array
    },
    data() {
    return {
      visibleSlide: 0,
      visibleSmallSlide:0,
    };
  },
     methods:{
    startSlide(val){
      console.log('geldi')
      this.visibleSlide = val

    },
    
    
  }
  
}
</script>

<style>
.slider-container {
  width: 530px;
  height: 500px;
  display: flex;
  align-items: flex-end;
  position: relative;
  z-index: 999;
}
.slider-list {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
}
.slider {
  display: flex;
  align-items: center;
  justify-content: center;
}
.bottom-images {
  width: 100px;
  height: 60px;
  background-color: orange;
  cursor: pointer;
  overflow: hidden;
  border-radius: 5px;

  
}
.top-image {
  width: 530px;
  height: 430px;
  overflow: hidden;
  position: absolute;
  background-color: cadetblue;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  border-radius:5px;

}
.main-image {
  min-height: 100%;
  transition: 0.4s ease;
  transform: scale(1);
}
.main-image:hover{
  transform: scale(1.25);
}
.bottom-img {
  max-width: 100%;
  min-height: 100%;
}
</style>