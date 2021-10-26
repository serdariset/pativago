<template>
  <div class="properties-container">
    <div class="tags">
      <span @click="changeBox(0)" :class="showBox == 0 ? 'activeSpan' : ''"
        >Comments</span
      >
      <span @click="changeBox(1)" :class="showBox == 1 ? 'activeSpan' : ''"
        >Services</span
      >
    </div>
    <div class="boxes">
      <div class="assa" v-if="showBox == 0">
        <CommentCard :comments="comments"></CommentCard>
      </div>
      <div class="box comment-box" v-else-if="showBox == 1"></div>
    </div>
  </div>
</template>

<script scoped>
import CommentCard from "./CommentCard.vue";
export default {
  name: "Services",
  props: {
    comments: Array,
    services: Array,
  },
  data() {
    return {
      showBox: 0,
    };
  },
  methods: {
    changeBox(val) {
      this.showBox = val;
    },
  },
  components: {
    CommentCard,
  },
};
</script>

<style>
.properties-container {
  width: calc(1180px - 2rem);
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.tags {
  width: 100%;
  height: 60px;
  background-color: #cfd8dc;
  display: flex;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.tags span {
  width: 50%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Poppins", sans-serif;
  font-size: 1.3rem;
  color: #757575;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  transition: 0.3s ease;
}
.tags span:hover {
  color: #03a9f4;
}
.tags span.activeSpan {
  border-bottom: 2px solid #03a9f4;
  color: #03a9f4;
}
.boxes {
  width: 100%;
  height: 275px;
  background-color: #cfd8dc;
  margin-top: 7px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.assa {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem;
  height: 275px;
  background-color: #cfd8dc;
  border-radius: 0 0 5px 5px;
}
</style>