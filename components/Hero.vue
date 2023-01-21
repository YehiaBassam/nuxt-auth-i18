<template>
  <div>
    <!-- Hero Section -->
    <div class="hero">
      <div class="container">
        <div class="row flex-center">
          <div class="col-12 col-lg-6">
            <h1 class="text-white pt-4">
              Welcome to Geeks UI Learning Application
            </h1>
            <p class="summary my-3">
              Hand-picked Instructor and expertly crafted courses, designed for the modern students and
              <br />
              entrepreneur.
            </p>

            <div class="d-flex">
              <b-button size="lg" class="flex-center mr-4"  variant="success" style="background-color: #19cb98;">
                <small>Browse Courses</small>
              </b-button>
              <b-button size="lg" class="flex-center" variant="light">
                <small>Are You Instructor?</small>
              </b-button>
            </div>
          </div>
          <div class="col-12 col-lg-6">
            <img src="~assets/images/hero-img.png" alt="hero" class="mt-4 img-fluid" />
          </div>
        </div>
      </div>
    </div>

    <!-- Brief Section -->
    <div class="brief">
      <div class="container">
        <div class="row py-4 g-2">
          <div v-for="(item,i) in items" :key="i" class="col-12 col-md-6 col-xl-4 mt-3 mt-xl-0">
            <div class="d-flex">
              <div class="circle-large flex-center icon">
                <b-icon-camera-video v-if="item.icon == 'video'"></b-icon-camera-video>
                <b-icon-people v-else-if="item.icon == 'people'"></b-icon-people>
                <b-icon-clock v-else></b-icon-clock>
              </div>
              <div class="ml-4">
                <h4 class="f-18">{{ item.title }}</h4>
                <p class="secondary-color">{{ item.text }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items:[
        {title:"30,000 online courses", text:"Enjoy a variety of fresh topics", icon:"video"},
        {title:"Expert instruction", text:"Find the right instructor for you", icon:"people"},
        {title:"Lifetime access", text:"Learn on your schedule", icon:"time"},
      ],
    }
  },
}
</script>


<style lang="scss" scoped>
@import '~assets/css/variables.scss';
.hero{
  background: $main-color;
}

.summary{
  font-size: 1.25rem;
  color: hsla(0,0%,100%,.5);
  line-height: 1.6;
}

.brief{
  box-shadow: 0 1px 3px rgba(3,0,71,.09);
  .icon{
    color: #de9e35;
    background-color: #ffeeda;
    font-size: 18px;
  }
}
</style>
