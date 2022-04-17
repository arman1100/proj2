<script>
export default {
     data:  () => {
        return {
             weather:""
        }
    },
    mounted() {
        // fetch on init
        this.fetchWeather()
    },
    methods: {
    async fetchWeather() {
      let data = await  (await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Paris,ON,CA&appid=3c2698390e1ec710f4c38eb7d8ccda74&units=metric`)).json();
      let answer = data.main.temp;
    this.weather = answer;
      
    }
  }
}
</script>

<template>
    <div>
      <p>WELCOME TO WEATHER </p>
        <p> Weather: {{weather}}C</p>

    </div>

</template>





<style>
</style>