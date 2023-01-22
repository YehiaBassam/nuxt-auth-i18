<template>

<div style="background-color: #f5f4f8;">
  <div class="container py-5 px-1">
    <h3>{{ title }}</h3>
    <b-carousel
        id="carousel-1"
        v-model="slide"
        controls
        indicators
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >

      <b-carousel-slide  img-src="~assets/images/blank.png"  class="slide">
        <div class="row">
          <div v-for="i in 4" :key="i" class="col-12 col-lg-6 col-xl-3">
            <CoursesItem />
          </div>
        </div>
      </b-carousel-slide>

      <b-carousel-slide  img-src="~assets/images/blank.png"  class="slide">
        <div class="row">
          <div v-for="i in 4" :key="i" class="col-12 col-lg-6 col-xl-3">
            <CoursesItem />
          </div>
        </div>
      </b-carousel-slide>

    </b-carousel>

  </div>
</div>
</template>

<script>

export default {
  props:{
    title:{
      type: String,
      required: true,
    }
  },
    data() {
      return {
        slide: 0,
        sliding: null,
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>

<style lang="scss" scoped>
.slide{
  margin-top: 50px;
  ::v-deep .carousel-control-prev, ::v-deep .carousel-control-next{
  background-color: #cacaca;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  top: 40%;
  border: 1px solid #ecebf1;
  }
  ::v-deep .carousel-control-prev {
    left: -7%;

    @media screen and (max-width: 1024px) {
      left: 43%;
      top: 95%;
    }
    @media screen and (max-width: 426px) {
      left: 33%;
    }
  }

  ::v-deep .carousel-control-next {
    right: -7%;
    @media screen and (max-width: 1024px) {
      right: 43%;
      top: 95%;
    }
    @media screen and (max-width: 426px) {
      right: 33%;
    }
  }

  ::v-deep .carousel-caption{
    right: 0;
    left: 0;
  }

  ::v-deep .carousel-inner{
    @media screen and (max-width: 1024px) {
      padding-top: 125px;
    }
    @media screen and (max-width: 768px) {
      padding-top: 340px;
    }
  }

  // ::v-deep .carousel-inner{
  //   overflow: visible;
  //   // overflow-x: hidden;
  // }


}
</style>
