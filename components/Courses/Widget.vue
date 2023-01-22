<template>
  <div style="background-color: #f5f4f8;">
    <div class="container py-5 px-1">
      <h3 class="ml-3 ml-md-0">{{ title }}</h3>
      <b-carousel v-model="slide" controls v-if="courses.length > 0">
        <b-carousel-slide img-src="~assets/images/blank.png"  class="slide">
          <div class="row">
            <div v-for="(item, i) in courses.slice(0, 4)" :key="i" class="col-12 col-lg-6 col-xl-3">
              <CoursesItem :course="item"/>
            </div>
          </div>
        </b-carousel-slide>
        <b-carousel-slide img-src="~assets/images/blank.png"  class="slide">
          <div class="row">
            <div v-for="(item, i) in courses.slice(5, 9)" :key="i" class="col-12 col-lg-6 col-xl-3">
              <CoursesItem :course="item"/>
            </div>
          </div>
        </b-carousel-slide>
      </b-carousel>

      <div v-else class="flex-center py-5">
        <div class="text-center d-flex justify-content-between">
          <b-spinner
          v-for="i in 4"
            :key="i"
            variant="secondary"
            type="grow"
            class="mr-3"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    title:{
      type: String,
      required: true,
    },
    coursesType:{
      type: String,
      required: true,
    }
  },
  created() {
    this.fetchCourses();
  },
  data() {
    return {
      slide:0,
      courses:[],
    }
  },
  methods: {
    async fetchCourses(){
      await this.$store.dispatch("loadCourses", this.coursesType);

      if (this.coursesType === 'recommededCourses'){
        this.courses = this.$store.getters.getRecommendedCourses;
      } else {
        this.courses = this.$store.getters.getPopularCourses;
      }
    },
  },
  }
</script>

<style lang="scss" scoped>
.slide{
  margin-top: 20px;
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
    padding-top: 40px;
    @media screen and (max-width: 1024px) {
      padding-top: 180px;
    }
    @media screen and (max-width: 768px) {
      padding-top: 380px;
    }
  }
}
</style>
