<template>
  <footer style="background-color: #f5f4f8;">
    <div class="container pt-3" style="border-top: 1px solid #ecebf1;">
      <div class="row justify-content-md-between align-items-center">
        <div class="col-12 col-md-6 text-center text-md-left">
          <p>© 2022 Geeks. All Rights Reserved.</p>
        </div>

        <div class="col-12 col-md-6">
          <ul class="d-flex p-0 aling-items-center justify-content-center justify-content-md-end" style="list-style-type: none;">
            <li v-for="(link,i) in links" :key="i" class="ml-4">
              <a class="secondary-color" :href="link.path">{{ link.label }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      links:[
        {path:"#", label:"Privacy"},
        {path:"#", label:"Terms"},
        {path:"#", label:"Feedback"},
        {path:"#", label:"Support"},
      ],
    }
  },
}
</script>


<style lang="scss" scoped>
@import '~assets/css/variables.scss';
a{
  transition: all .2s;
  &:hover{
    color: $main-color;
    text-decoration: none;
  }
}
</style>
