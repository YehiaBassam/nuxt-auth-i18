<template>

<div style="background-color: #f5f4f8;">
  <div class="container py-5 px-1">
    <h3>Recommended to you</h3>
    <!-- <div class="row">
      <div v-for="i in 4" :key="i" class="col-12 col-sm-6 col-lg-4 col-xl-3">
        <CoursesItem />
      </div>
    </div> -->

    <b-carousel
        id="carousel-1"
        v-model="slide"
        controls
        indicators
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
      <!-- img-width="1024"
      img-height="480" -->

      <!-- Text slides with image -->
      <!-- <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://picsum.photos/1024/480/?image=52"
      ></b-carousel-slide> -->

      <!-- Slides with custom text -->
      <!-- <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
        <h1>Hello world!</h1>
      </b-carousel-slide> -->

      <!-- Slides with image only -->
      <!-- <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide> -->

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <!-- <b-carousel-slide>
        <template #default >
          fsfsdf
        </template>
      </b-carousel-slide> -->

      <!-- img-src="~assets/images/blank.png" -->

      <b-carousel-slide  img-src="~assets/images/blank.png"  class="slide">
        <div class="row">
          <div v-for="i in 4" :key="i" class="col-12 col-sm-6 col-lg-4 col-xl-3">
            <CoursesItem />
          </div>
        </div>
      </b-carousel-slide>

      <b-carousel-slide  img-src="~assets/images/blank.png"  class="slide">
        <div class="row">
          <div v-for="i in 4" :key="i" class="col-12 col-sm-6 col-lg-4 col-xl-3">
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
    mounted() {
      const screenWidth = window.screen.width;
      if (screenWidth < 1200)
        this.items = 3;
      else if (screenWidth < 992)
        this.items = 2;
      else if (screenWidth < 992)
        this.items = 2;
        else
        this.items = 4;

      console.log(screenWidth)
      console.log(this.items)
    },
    data() {
      return {
        slide: 0,
        sliding: null,

        items: 4,
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
  top: 50%;
  border: 1px solid #ecebf1;
  }
  ::v-deep .carousel-control-prev {
    left: -130px;
  }

  ::v-deep .carousel-control-next {
    right: -130px;
  }

  ::v-deep .carousel-caption{
    right: 0;
    left: 0;
  }

  // ::v-deep .carousel-inner{
  //   overflow: visible;
  //   // overflow-x: hidden;
  // }


}
</style>
