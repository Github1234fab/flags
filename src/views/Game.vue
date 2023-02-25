<template>
  <div class="container_game">
    <div class="table_board">
      <h1>Tableau de bord</h1>
      <div class="themes">
        <span class="continent">Europe <input type="radio" /></span>
        <span class="continent">Asie <input type="radio" /></span>
        <span class="continent">Amérique<input type="radio" /></span>
        <span class="continent">Afrique <input type="radio" /></span>
        <span class="continent">Océanie <input type="radio" /></span>
      </div>
      <div class="container_counter">
        <h3 class="counter">counter</h3>
      </div>
    </div>

    <div class="container_gamer">
      <h3 class="question">À quel pays appartient ce drapeau?</h3>
      <img :src="countryFlag" alt="Image des drapeaux" class="countryFlag" />
      <div
        @click="reponse"
        v-for="name in dataNamesRandom.concat(countryName)"
        :key="name"
        class="countries_names"
      >
        {{ name }}
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      flag: [],
      countryName: '',
      countryFlag: '',
      dataReponse: '',
      dataNamesRandom: ''
    }
  },
  methods: {
    oneflag() {
      this.flag.map((el) => {
        const randomIndex = Math.floor(Math.random() * this.flag.length)
        const randomElement = this.flag[randomIndex]
        this.countryName = randomElement.translations.fra.common
        this.countryFlag = randomElement.flags.png
        console.log(this.countryName)
        console.log(this.countryFlag)
      })
    },
    reponse() {
      const inputReponse = this.$refs.inputReponse.value
      if (this.countryName == inputReponse) {
        console.log('ok')
      } else {
        console.log('pas ok')
      }
      this.dataReponse = inputReponse
    },
    randomNames() {
      this.flag.map((el) => {
        const randomElements = this.flag.sort(() => 0.5 - Math.random()).slice(0, 2)
        this.dataNamesRandom = randomElements.map((el) => el.translations.fra.common)
        console.log(this.dataNamesRandom)
      })
    }
  },
  mounted() {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((response) => {
        this.flag = response.data
        console.log(this.flag)
        this.oneflag()
        this.randomNames()
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>

<style>
.table_board {
  background: linear-gradient(rgb(178, 180, 29), rgb(172, 175, 14));
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  height: 240px;
  margin-top: 20px;
}
.table_board h1 {
  color: white;
  font-size: 18px;
  margin-top: 20px;
}
.themes {
  height: 200px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 120px;
  margin-right: 120px;
}
.continent {
  color: white;
  height: 30px;
  width: 100px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  align-content: center;
}
.counter_container {
  height: 50px;
  width: 100%;
  background-color: white;
  border: none;
}
.counter {
  font-size: 18px;
  color: white;
  text-align: center;
  border: solid 1px grey;
  background-color: grey;
  margin-bottom: 40px;
}
.container_gamer {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  height: 300px;
}
.question {
  margin-top: 30px;
  font-size: 18px;
}
.game_starter {
  height: 70px;
  width: 70px;
  background-color: rgb(24, 237, 24);
  color: white;
  border: none;
  box-shadow: 1px 1px 6px 0px rgb(69, 64, 64) inset;
}
.countryFlag {
  height: 200px;
  width: auto;
  box-shadow: 1px 1px 6px 0px rgb(69, 64, 64);
  border-radius: 5px;
  margin-bottom: 25px;
  margin-top: 25px;
}
.input {
  border: none;
  box-shadow: 1px 1px 4px 0px rgb(69, 64, 64) inset;
  width: auto;
}
.countries_names {
  color: rgb(1, 1, 72);
  box-shadow: 1px 1px 4px 0px rgb(69, 64, 64) inset;
  background: linear-gradient(rgb(249, 249, 249), rgb(217, 214, 214));
  width: 300px;
  text-align: center;
  padding: 10px;
  margin-bottom: 5px;
  font-size: 14px;
  border-radius: 5px;
  transition: 0.2s ease-in-out;
}
.countries_names:hover {
  width: 290px;
  background: linear-gradient(rgb(221, 219, 219), rgb(171, 170, 170));
  border-radius: 7px;
}
</style>
