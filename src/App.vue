<template>
  <div class="container" id="app">
    <header class="page-header">
      <Navbar/>
    </header>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  name: 'App',
  components:{
    Navbar
  }
}
</script>

<style Scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
 
  margin-top: 20px;
}

  a {
    color: black;
  }
  a:hover{
    color: lightgray;
  }
  a:active {
    color: white;
  }
</style>
