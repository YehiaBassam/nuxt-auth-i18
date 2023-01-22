<template>
  <div class="bg-img img-1 flex-center">
    <div class="card my-3">
      <div class="row no-gutters">
        <div class="col-md-5">
          <div class="bg-img img-2 h-100 p-5 text-white">
            <p style="font-size:40px;line-height: 1.2;">
              MAGIC IS IN DETAILS
            </p>
            <p class="mb-0">Please use your credentials to login.</p>
            <p>If you are not a member, please register.</p>
          </div>
        </div>
        <div class="col-md-7">
          <div class="card-body p-5">
            <img src="~assets/images/logo.svg" class="mb-5" alt="logo">

            <b-form @submit.stop.prevent="onSubmit">
              <h5 class="mb-1 text-secondary">Login</h5>
              <!-- Email -->
              <b-form-group label="E-mail" label-for="email-input">
                <b-form-input
                id="email-input"
                name="email-input"
                type="email"
                v-model="$v.form.email.$model"
                :state="validateState('email')"
                aria-describedby="email-input-feedback"
                />
                <b-form-invalid-feedback id="email-input-feedback" >
                  should be a valid email registered
                </b-form-invalid-feedback>
              </b-form-group>

              <!-- Password -->
              <b-form-group label="Password" label-for="password-input" class="password">
                <b-form-input
                  id="password-input"
                  name="password-input"
                  type="password"
                  v-model="$v.form.password.$model"
                  :state="validateState('password')"
                  aria-describedby="password-input-feedback"
                />

                <b-form-invalid-feedback id="password-input-feedback" >
                  Password should be more than 5 characters
                </b-form-invalid-feedback>
              </b-form-group>

              <div class="d-md-flex justify-content-between align-items-center mt-4">
                <span class="pointer text-secondary">
                  Forget Password?
                </span>
                <b-button pill type="submit" class="px-5 py-2 bg-main-color mt-4 mt-md-0">LOGIN</b-button>
              </div>

            </b-form>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>


<script>
import { validationMixin } from "vuelidate";
import { required, minLength, email } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  data() {
    return {
      form: {
        email: null,
        password: null
      }
    };
  },
  validations: {
    form: {
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(6),
      },
    }
  },
  methods: {
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    onSubmit() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }

      if (this.form.email !== "hani@gmail.com"){
        this.$bvToast.toast('invalid email', {
          title: `email should be hani@gmail.com`,
          variant: 'danger',
        })
        return;
      }
      if (this.form.password != 123456){
        this.$bvToast.toast('invalid password', {
          title: `password should be 123456`,
          variant: 'danger',
        })
        return;
      }
      this.login();
    },
    login(){
      this.$axios
        .post("api/login", this.form)
        .then((res) => {
          if (res.status == 200) {
            this.$store.commit("setUserLogin", true);
            this.$bvToast.toast('success Login', {
              title: `you will be redirect to courses Page`,
              variant: 'success',
            })

            setTimeout(() => {
              this.$router.push({
                  path: '/home'
              })
            } ,2000);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
}
</script>

<style lang="scss" scoped>
.card{
  width:80%;
  max-width: 1000px;
  border-radius: 12px;
  border: 0;
}

  .bg-img{
    background-size:     cover;
    background-repeat:   no-repeat;
    background-position: center center;
  }
  .img-1{
    background-image: url(@/assets/images/ballon.png);
    min-height: 100vh;
  }
  .img-2{
    background-image: url(@/assets/images/ballon2.png);
    border-top-left-radius: 9px;
    border-bottom-left-radius: 12px;

    @media screen and (max-width:768px) {
      border-bottom-left-radius: 0px;
      border-top-right-radius: 9px;
    }
  }

.form-group{
  ::v-deep label{
    position: relative;
    top: 18px;
    left: 22px;
    width: 65px;
    background: #ffffff;
    padding: 0px 10px;
  }
}
::v-deep .password label{
  width: 87px;
}
</style>
