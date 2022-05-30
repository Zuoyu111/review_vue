<template>
  <ul>
    <li :style="{opacity}">
      我是tdawg
    </li>
    <li>
      message001 <input type="text">
    </li>
    <li>
     message002 <input type="text">
    </li>
    <li>
      message003 <input type="text">&nbsp;
    </li>
  </ul>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      opacity: 1
    }
  },
  activated() {
    this.timer = setInterval(() => {
      console.log('11');
      this.opacity -= 0.01
      if(this.opacity <= 0) this.opacity = 1
    },16)
  },
  deactivated() {
    clearInterval(this.timer)
  }
}
</script>

<style scoped>

</style>