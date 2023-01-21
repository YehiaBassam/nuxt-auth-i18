<template>
  <div class="container">
    <div>
      <div class="mb-4">
        <label>{{ userData.email }}</label>
        <input type="text" v-model="userData.email" />
      </div>
      <div class="mb-4">
        <label>{{ userData.password }}</label>
        <input type="text" v-model="userData.password" />
      </div>
      <div>
        <button @click="login">Click to login</button>
      </div>
      <div v-if="responseMsg" class="danger">
        <h1>{{ responseMsg }}</h1>
      </div>
    </div>
    <div v-if="isLoggedIn">
      <h1>Welcome {{ userData.name }}</h1>
    </div>
    <h1>Popular Courses</h1>
    <div class="codeClass" v-for="(item, index) in popular" :key="index">
      <code>{{ item }}</code>
      <br />
    </div>

    <!-- <h1>Recommended Courses</h1>
    <div class="codeClass" v-for="(item, index) in recommended" :key="index">
      <code>{{ item }}</code>
      <br />
    </div> -->
  </div>
</template>

<script>
export default {
  name: "app",

  data() {
    return {
      recommended: [],
      popular: [],
      userData: {
        name: "Hani",
        email: "hani@gmail.com",
        password: "123456",
      },
      isLoggedIn: false,
      responseMsg: null,
    };
  },
  methods: {
    login() {
      debugger;
      this.$axios
        .post("api/login", this.userData)
        .then((res) => {
          debugger;
          console.log(res);
          if (res.status == 200) {
            this.isLoggedIn = true;
            this.responseMsg = res.data.message;
          }
        })
        .catch((err) => {
          console.log(err);
          this.responseMsg = err.response.data.message;
        });
    },
  },
  created() {
    this.$axios
      .get("api/recommededCourses")
      .then((res) => {
        debugger;
        console.log(res);
        this.recommended = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
    this.$axios
      .get("api/popularCourses")
      .then((res) => {
        debugger;
        console.log(res);
        this.popular = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
<style>
.container {
  width: 100%;
  height: auto;
  background-color: #ff9;
  margin: auto !important;
  text-align: center;
  color: #066;
}
.mb-4 {
  margin-bottom: 20px !important;
}
.danger {
  color: red;
}
.codeClass {
  width: 500px;
  margin: auto;
  padding-bottom: 20px;
}
</style>
