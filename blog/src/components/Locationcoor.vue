<script>
export default {
    name: "Location-coor"
    ,
     data:  () => {
        return {
             coor1:"",
             coor2:""

        }
    },
    mounted() {
        // fetch on init
        this.fetchCoordinate()
    },
    methods: {
    async fetchCoordinate() {
      let data = await  (await fetch(`http://api.openweathermap.org/geo/1.0/zip?zip=M1J1G6,CA&appid=5b0c946d4e2c135e916436e25450065a`)).json();
      let latitude = data.lat;
      let longitude = data.lon;
    this.coor1 = latitude;
    this.coor2 = longitude;
      
    }
  }
}
</script>

<template>
    <div>
      <p>This is your exact coordinates: </p>
        <p> Coordinates: {{coor1}}, {{coor2}}</p>

    </div>

</template>





<style>
</style>