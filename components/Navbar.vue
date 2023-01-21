<template>
  <b-navbar toggleable="lg"  >
    <b-navbar-brand href="#">
      <img src="~/assets/images/logo.svg" alt="our-education" />
    </b-navbar-brand>

    <div class="d-flex">
      <div class="d-lg-none d-flex mr-4">
        <div class="mx-3 ">
          <div class="circle flex-center position-relative pointer" style="background-color: #f5f4f8;">
            <b-icon-bell class="text-secondary"></b-icon-bell>
            <div class="notification" style="top:0;right:0px;background: #754ffe;"></div>
          </div>
        </div>

        <div>
          <div class="circle position-relative pointer">
            <img src="~assets/images/avatar-1.jpg" alt="avatar" class="fit"/>
            <div class="notification bg-success" style="bottom:0;right:0px"></div>
          </div>
        </div>
      </div>
      <b-navbar-toggle target="nav-collapse" class="text-danger"></b-navbar-toggle>
    </div>


    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item v-for="(link, i) in links" :key="i" :href="link.path" class="nav-link">
          {{ link.label }}
        </b-nav-item>
      </b-navbar-nav>

      <div class="ml-lg-4 mt-3 mt-lg-0" style="max-width: 300px;">
        <b-input-group>
          <b-input-group-prepend class="flex-center bg-white search-icon">
            <b-icon-search></b-icon-search>
          </b-input-group-prepend>

          <b-form-input v-model="search" placeholder="Search Courses" class="p-4 search-input"></b-form-input>
        </b-input-group>
      </div>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto flex-lg-center flex-row align-items-center mt-4 mt-lg-0">
        <b-dropdown id="dropdown-1" text="Lang" class="m-md-2 d-block">
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">Ar</b-dropdown-item>
        </b-dropdown>

        <div class="d-none d-lg-flex">
          <div class="mx-3 ">
            <div class="circle flex-center position-relative pointer" style="background-color: #f5f4f8;">
              <b-icon-bell class="text-secondary"></b-icon-bell>
              <div class="notification" style="top:0;right:0px;background: #754ffe;"></div>
            </div>
          </div>

          <div>
            <div class="circle position-relative pointer">
              <img src="~assets/images/avatar-1.jpg" alt="avatar" class="fit"/>
              <div class="notification bg-success" style="bottom:0;right:0px"></div>
            </div>
          </div>
        </div>

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {path:"#", label:"Browse"},
        {path:"#", label:"Landings"},
        {path:"#", label:"Pages"},
        {path:"#", label:"Accounts"},
      ],

      search:"",
    }
  },
}
</script>

<style lang="scss" scoped>
.nav-item a{
  color: black !important;
  transition: all .2s;
  padding-top: 0;
  padding-bottom: 0;

  &:hover{
    color: rgb(115, 115, 115) !important;
  }
}

.search-input{
  border-left: 0;
  border-color: none;
}
.search-icon{
  width:20%;
  border-radius: 3px;
  border: 1px solid #ced4da;
}
</style>
