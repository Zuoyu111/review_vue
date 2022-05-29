<template>
  <div>
    <ul>
      <li v-for="item in newsList" :key="item.id">

<!--        query 方式传递参数 -->
<!--        <router-link :to='`/home/news/detail?id=${item.id}&&title=${item.title}`'>{{ item.title }}</router-link>-->
<!--        <router-link :to="{-->
<!--          path: '/home/news/detail',-->
<!--          query: {-->
<!--            id: item.id,-->
<!--            title: item.title-->
<!--          }-->
<!--        }">-->
<!--        {{ item.title }}-->
<!--        </router-link>        -->

<!--        params方式传递参数 -->
<!--        <router-link-->
<!--            :to="`/home/news/detail/${item.id}/${item.title}`">-->
<!--          {{ item.title }}-->
<!--        </router-link>-->
      <router-link :to="{
        name: 'news_detail',  //当使用params传递参数时  用对象写法的使用 必须使用name 不能用path
        params: {
          id: item.id,
          title: item.title
        }
      }">
        {{ item.title }}
      </router-link>


      </li>
    </ul>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      newsList: [
        {id: '001',title: '新闻1'},
        {id: '002',title: '新闻2'},
        {id: '003',title: '新闻3'}
      ]
    }
  }
}
</script>

<style scoped>

</style>