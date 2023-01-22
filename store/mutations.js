export default{
  setUserLogin(state, isAuth){
    state.isLoggedIn = isAuth;
  },
  setRecommendedCourses(state, courses){
    state.recommendedCourses = courses;
  },
  setPopularCourses(state, courses){
    state.popularCourses = courses;
  },
}
