export default {
    async loadCourses(context, coursesType){
    await this.$axios
      .get(`api/${coursesType}`)
      .then((res) => {
        if (coursesType === 'recommededCourses'){
          context.commit('setRecommendedCourses', res.data);
        } else {
          context.commit('setPopularCourses', res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
}
