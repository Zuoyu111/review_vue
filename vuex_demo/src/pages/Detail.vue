<template>
  <ul>
<!--    <li>消息编号:{{ this.$route.query.id }}</li>-->
<!--    <li>消息标题:{{ this.$route.query.title }}</li>-->
    <li>{{ id }}</li>
    <li>{{ title }}</li>
  </ul>
</template>

<script>
export default {
  name: "Detail",
  props: ['id','title'],
  mounted() {
    console.log(this.$route)

  }
}
</script>

<style scoped>

</style>