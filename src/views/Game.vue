<template>
  <div class="container_game">
  <div class="table_board">
    <h1>Tableau de bord</h1>
  <div class="themes">
  <span class="continent">Europe <input type="radio"></span>
  <span class="continent">Asie <input type="radio"></span>
  <span class="continent">Amérique<input type="radio"></span>
  <span class="continent">Afrique <input type="radio"></span>
   <span class="continent">Océanie <input type="radio"></span>
  </div>
  <div class="container_counter">
<h3 class="counter">counter</h3>
  </div>
  </div>
  </div>
  <div class="container_gamer">
    <h3 class="question">À quel pays appartient ce drapeau?</h3>
  <button @click="oneflag" class="game_starter">Start</button>
  
  <!-- <div>{{ countryName }}</div> -->
      <img :src="countryFlag" alt="Image des drapeaux" class="countryFlag" />
      <input @input="reponse" type="text" class="input" ref="inputReponse" >
      </div>
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
.table_board{
  background: linear-gradient(rgb(178, 180, 29), rgb(172, 175, 14));
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  height: 240px;
  margin-top: 20px;
}
.table_board h1{
  color: white;
  font-size: 18px;
  margin-top: 20px;
}
.container_game{
background-color: beige;
}
.themes{
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
  font-size: 18px;
  color: white;
  text-align: center;
  border: solid 1px grey;
  background-color: grey;
  margin-bottom: 40px;
}
.container_gamer{
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
}
.question{
  margin-top: 30px;
}
.game_starter{
  height: 70px;
  width: 70px;
  background-color: rgb(24, 237, 24);
  color: white;
  border: none;
  box-shadow: 1px 1px 6px 0px  rgb(69, 64, 64) inset;
}
.countryFlag{
  height: 100px;
   box-shadow: 1px 1px 6px 0px  rgb(69, 64, 64);
   border-radius: 5px;
   margin-bottom: 25px;
   margin-top: 25px;
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



  