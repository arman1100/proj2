<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Code step by step"/>
  <Home />
  <WeatherMap />
  <Locationcoor />
  
  <router-link to="/" >About US</router-link> <br>
  <router-link to="/services" >Our Services</router-link> <br>
  <router-link to="/customers" >Our customers</router-link>

  <router-view />


</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Home from './components/Home.vue'
import WeatherMap from './components/WeatherMap.vue'
import Locationcoor from './components/Locationcoor.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Home,
    WeatherMap,
    Locationcoor
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
