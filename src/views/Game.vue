<template>
  <div class="container_game">
  <div class="tableBoard">
    <h1>Tableau de bord</h1>
  <div class="themes">
  <span class="continent">Europe <input type="radio"></span>
  <span class="continent">Asie <input type="radio"></span>
  <span class="continent">Amérique<input type="radio"></span>
  <span class="continent">Afrique <input type="radio"></span>
   <span class="continent">Océanie <input type="radio"></span>
  </div>
  <div class="counter_container">
<div class="counter">counter</div>
  </div>
  <h3 class="question">À quel pays appartient ce drapeau?</h3>
  </div>
  </div>
  <button @click="oneflag"></button>
  <input @input="reponse" type="text" class="input" ref="inputReponse" >
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
dataReponse: "",
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
    },
   reponse() {
      const inputReponse = this.$refs.inputReponse.value;
      if (this.countryName == inputReponse) {
        console.log("ok");
      } else {
        console.log("pas ok");
      }
      this.dataReponse = inputReponse;
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
body{
  font-family: poppins;
}
.container_game{
background-color: beige;
}
.themes{
  background-color: blue;
  height: 200px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.continent{
  color: white;
  height: 30px;
  width: 100px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
align-content: center;
}
.counter_container{
  height: 50px;
  width: 100%;
  background-color: white;
  border: none;
}
.counter{
  color: white;
  text-align: center;
  border: solid 1px grey;
  background-color: grey;
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



  