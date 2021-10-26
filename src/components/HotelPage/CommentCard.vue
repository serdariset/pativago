<template>
  <div class="comment-card-container">
    <div class="comment-cards" v-for="(comment,index) in comments" :key="index">
      <div class="comment-card-user">
        <i class="fas fa-user"></i>
      </div>
      <div class="comment-card-client">
        <h3 class="comment-card-client-name">{{ comment.name  }}</h3>
        <p class="comment-card-client-description">
          {{ comment.description }}
        </p>
        <span
          class="comment-card-rating-ribbon"
          :class="
            comment.rate > 9
              ? 'green'
              : comment.rate < 9 && comment.rate > 8
              ? 'yellow'
              : 'red'
          "
        >
          {{ comment.rate }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommentCard",
  props: {
    comments: Array,
  },
};
</script>

<style>
.comment-card-container {
width:100% ;
height: 220px;
flex-wrap: wrap;
display: flex;
justify-content: space-between;
align-items: center;
}
.comment-cards {
  width: 550px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  overflow: hidden;
}
.comment-card-user {
  width: 100px;
  height: 100px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #90a4ae;
  font-size: 2rem;
  color: #455a64;
}
.comment-card-client {
  padding: 0.5rem;
  width: 450px;
  height: 100px;
  background-color: white;
  position: relative;
}
.comment-card-client-name {
  font-family: "Poppins", sans-serif;
  color: #757575;
  font-size: 16px;
  margin-bottom: 5px;
}
.comment-card-client-description {
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  font-weight: 500;
}
.comment-card-rating-ribbon {
  position: absolute;
  width: 80px;
  height: 20px;
  top: 5px;
  right: -26px;
  display: flex;
  justify-content: center;
  transform: rotate(45deg);
  align-items: center;
  color: white;
  font-family: "Poppins", sans-serif;
}
</style>