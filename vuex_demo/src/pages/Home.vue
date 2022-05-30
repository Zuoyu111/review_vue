<template>
  <div class="panel-body">
    <div>
      <h2>Home组件内容</h2>
      <div>
        <ul class="nav nav-tabs">
          <li>
<!--            <a class="list-group-item" href="./home-news.html">News</a>-->
            <router-link to="/home/message" active-class="active">Message</router-link>
          </li>
          <li>
<!--            <a class="list-group-item active" href="./home-message.html">Message</a>-->
            <router-link to="/home/news" active-class="active">News</router-link>
          </li>
        </ul>
        <div>
          <keep-alive include="Message">
            <router-view></router-view>
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>

</style>