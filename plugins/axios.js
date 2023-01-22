export default function({ $axios, redirect }) {
  $axios.onError(error => {
    let errorMessage = "Error occurred"
    if (error.description === 'Mirage: undefined'){
      errorMessage = error.message
    }
    else if (error.response.status === 500) {
      errorMessage = "Error in server"
    }
    else if (error.response.status === 401) {
      errorMessage = "please login first"
    }

    $nuxt.$bvToast.toast('!! Erorr', {
      title: errorMessage,
      variant: 'danger',
    })
  });
}
