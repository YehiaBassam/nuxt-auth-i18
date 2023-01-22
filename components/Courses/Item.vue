<template>
  <div class="card mb-5">
    <img :src="course.img" class="card-img-top img" alt="course"/>
    <div class="card-body text-dark text-left px-4">
      <h6 class="card-title">
        {{ course.title.length > 45 ? `${course.title.substring(0, 45)} ...` : course.title }}
      </h6>
      <div class="d-flex">
        <div class="secondary-color">
          <b-icon-clock></b-icon-clock>
          {{ course.duration }}
        </div>
        <div class="secondary-color ml-3">
          <b-icon-bar-chart-fill class="main-color"></b-icon-bar-chart-fill>
          Advance
        </div>
      </div>
      <div class="my-3">
        <b-icon-star-fill v-for="i in 5" :key="i" class="text-warning"></b-icon-star-fill>
        <span style="color:#ffaa46">5</span>
        <span style="color:#a8a3b9">({{ course.count }})</span>
      </div>
      <div class="d-flex align-items-center">
        <h6 class="mt-2 mr-1">${{ course.priceAfterDiscount }}</h6>
        <s class="text-secondary">
          <small>${{ course.price }}</small>
        </s>
      </div>
    </div>

    <div class="d-flex align-items-center justify-content-between px-4 py-3" style="border-top:1px solid black">
      <div class="d-flex">
        <div class="circle-small">
          <img src="~assets/images/avatar-1.jpg" alt="avatar" class="fit"/>
        </div>
        <span class="ml-3 text-secondary">{{ course.instructor }}</span>
      </div>
      <b-icon-bookmark class="text-secondary"></b-icon-bookmark>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    course:{
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
  .card{
    border: 0;
    box-shadow: 0 1px 3px rgb(3 0 71 / 9%);
    cursor: pointer;
    border-radius: .5rem;
    transition: all .3s;

    .img{
      border-top-left-radius: .5rem !important;
      border-top-right-radius: .5rem !important;
    }

    &:hover{
      box-shadow: 0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -2px rgb(0 0 0 / 5%);
    }

    @media screen and (max-width: 1024px) {
      max-width: 80%;
      margin: auto;
    }
  }
</style>
