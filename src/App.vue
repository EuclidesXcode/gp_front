<template id="tmp">
  <div id="app">
    <img id="img" class="shadow" src="./assets/logo.png" >
    <index/>
  </div>
</template>

<script>
import index from './components/index.vue'

export default {
  name: 'app',
  components: {
    index
  }
}
</script>

<style>
body {
  background-color: rgb(255, 255, 255);
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  align-self: center;
  color: #000000;
  margin-top: 4%;
}
#img {
  width: 100px;
  height: 100px;
  margin-bottom: 40px;
  border-radius: 50px;
}
#tmp {
  background-color: black;
}
</style>
