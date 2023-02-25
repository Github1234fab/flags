<template>
  <div class="container_game">
  <h1>Game</h1>
  </div>
  <button @click="oneflag"></button>
  <div>{{ countryName }}</div>
      <img :src="countryFlag" alt="Image des drapeaux" />
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      flag: [],
      countryName: "",
countryFlag: "",
    }
  },
  methods: {
    oneflag() {
      this.flag.map((el) => {
   const randomIndex = Math.floor(Math.random() * this.flag.length);
        const randomElement = this.flag[randomIndex];
        this.countryName = randomElement.translations.fra.common;
       this.countryFlag = randomElement.flags.png;
        console.log(this.countryName);
           console.log(countryFlag);
      })
    }
  },
  mounted() {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((response) => {
        this.flag = response.data
        console.log(this.flag)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>
<style>
.container_game{
background-color: beige;
}
</style>





 <!-- <div> -->
    <!-- <div v-for="(flag, index) in flag" :key="index">
      <div >{{ flag.translations.fra.common }}</div>
      <div v-if="flag.flags.png">
        <img :src="flag.flags.png" alt="Image des drapeaux" /> -->
      <!-- </div> -->
    <!-- </div> -->
  <!-- </div> -->