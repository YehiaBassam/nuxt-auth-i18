<template>
  <div>
    <Navbar />
    <Hero />
    <CoursesWidget title="Recommended to you" coursesType="recommededCourses"/>
    <CoursesWidget title="Most Popular" coursesType="popularCourses"/>
    <AppFooter />
  </div>
</template>

<script>
export default {
  middleware: 'authenticated'
}
</script>
